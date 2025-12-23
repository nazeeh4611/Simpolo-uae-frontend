// src/components/admin/ProjectForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ProjectForm = ({ isEditMode = false, projectData = null, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    location: '',
    description: '',
    category: '',
    scope: '',
    completionDate: '',
    featured: false
  });
  const [productsUsed, setProductsUsed] = useState([{ name: '', category: '', quantity: '' }]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (isEditMode && projectData) {
      loadProjectData();
    }
  }, [isEditMode, projectData]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/admin/projects/categories');
      setCategories(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories');
      setCategories([]);
    }
  };

  const loadProjectData = () => {
    setFormData({
      title: projectData.title || '',
      client: projectData.client || '',
      location: projectData.location || '',
      description: projectData.description || '',
      category: projectData.category || '',
      scope: projectData.scope || '',
      completionDate: projectData.completionDate ? new Date(projectData.completionDate).toISOString().split('T')[0] : '',
      featured: projectData.featured || false
    });
    
    setExistingImages(Array.isArray(projectData.images) ? projectData.images : []);
    setProductsUsed(
      Array.isArray(projectData.productsUsed) && projectData.productsUsed.length > 0 
        ? projectData.productsUsed 
        : [{ name: '', category: '', quantity: '' }]
    );
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleProductChange = (index, field, value) => {
    const newProducts = [...productsUsed];
    newProducts[index][field] = value;
    setProductsUsed(newProducts);
  };

  const addProduct = () => {
    if (productsUsed.length < 10) {
      setProductsUsed([...productsUsed, { name: '', category: '', quantity: '' }]);
    } else {
      toast.error('Maximum 10 products allowed');
    }
  };

  const removeProduct = (index) => {
    if (productsUsed.length > 1) {
      const newProducts = productsUsed.filter((_, i) => i !== index);
      setProductsUsed(newProducts);
    } else {
      toast.error('At least one product field is required');
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length === 0) return;

    const validFiles = files.filter(file => 
      file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024
    );

    if (validFiles.length !== files.length) {
      toast.error('Some files were rejected. Only images under 10MB are allowed.');
    }

    const currentTotal = images.length + existingImages.length;
    const remainingSlots = 10 - currentTotal;

    if (remainingSlots <= 0) {
      toast.error('Maximum 10 images allowed per project');
      return;
    }

    const filesToAdd = validFiles.slice(0, remainingSlots);

    if (filesToAdd.length < validFiles.length) {
      toast.error(`Only ${remainingSlots} more image(s) can be added`);
    }

    const newImages = filesToAdd.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      caption: ''
    }));

    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    const image = images[index];
    if (image.preview) {
      URL.revokeObjectURL(image.preview);
    }
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = async (imageIndex) => {
    if (!isEditMode || !projectData) return;
    
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await axios.delete(`/api/admin/projects/${projectData._id}/images/${imageIndex}`);
        setExistingImages(prev => prev.filter((_, i) => i !== imageIndex));
        toast.success('Image deleted successfully');
      } catch (error) {
        console.error('Error deleting image:', error);
        toast.error(error.response?.data?.message || 'Failed to delete image');
      }
    }
  };

  const handleCaptionChange = (index, value) => {
    setImages(prev => prev.map((img, i) => 
      i === index ? { ...img, caption: value } : img
    ));
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      toast.error('Title is required');
      return false;
    }
    if (!formData.client.trim()) {
      toast.error('Client name is required');
      return false;
    }
    if (!formData.location.trim()) {
      toast.error('Location is required');
      return false;
    }
    if (!formData.category) {
      toast.error('Category is required');
      return false;
    }
    if (!formData.description.trim()) {
      toast.error('Description is required');
      return false;
    }
    if (images.length + existingImages.length === 0) {
      toast.error('At least one image is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      
      Object.keys(formData).forEach(key => {
        if (formData[key] !== undefined && formData[key] !== null && formData[key] !== '') {
          formDataToSend.append(key, formData[key]);
        }
      });

      const validProducts = productsUsed.filter(p => p.name.trim());
      formDataToSend.append('productsUsed', JSON.stringify(validProducts));

      images.forEach((image, index) => {
        formDataToSend.append('images', image.file);
        formDataToSend.append(`caption_${index}`, image.caption || '');
      });

      if (isEditMode && projectData) {
        await axios.put(`/api/admin/projects/${projectData._id}`, formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        toast.success('Project updated successfully');
      } else {
        await axios.post('/api/admin/projects', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        toast.success('Project created successfully');
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving project:', error);
      toast.error(error.response?.data?.message || 'Error saving project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter project title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter client name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Dubai, UAE"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Category</option>
              {Array.isArray(categories) && categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Completion Date
            </label>
            <input
              type="date"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              id="featured"
              checked={formData.featured}
              onChange={handleInputChange}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
              Mark as Featured Project
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe the project..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Scope of Work
          </label>
          <textarea
            name="scope"
            value={formData.scope}
            onChange={handleInputChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe the scope of work..."
          />
        </div>
      </div>

      {/* Products Used */}
      <div className="border-t pt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Products Used</h2>
          <button
            type="button"
            onClick={addProduct}
            className="text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={productsUsed.length >= 10}
          >
            + Add Product
          </button>
        </div>
        
        <div className="space-y-4">
          {productsUsed.map((product, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg bg-gray-50">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) => handleProductChange(index, 'name', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={product.category}
                  onChange={(e) => handleProductChange(index, 'category', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Porcelain Tiles"
                />
              </div>
              <div className="flex items-end space-x-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="text"
                    value={product.quantity}
                    onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 100 sqm"
                  />
                </div>
                {productsUsed.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeProduct(index)}
                    className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove product"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Images Section */}
      <div className="border-t pt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Project Images <span className="text-red-500">*</span>
        </h2>
        
        {(images.length + existingImages.length) < 10 && (
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Upload Images (Max 10 images, 10MB each)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="project-image-upload"
              />
              <label htmlFor="project-image-upload" className="cursor-pointer block">
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 font-medium">Click to upload images</p>
                  <p className="text-sm text-gray-500 mt-1">PNG, JPG, JPEG up to 10MB</p>
                  <p className="text-xs text-blue-600 mt-2">
                    {10 - (images.length + existingImages.length)} slot(s) remaining
                  </p>
                </div>
              </label>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {existingImages.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Existing Images</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {existingImages.map((image, index) => (
                  <div key={`existing-${index}`} className="relative group">
                    <img
                      src={image.url}
                      alt={image.caption || `Image ${index + 1}`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    {image.caption && (
                      <p className="text-xs text-gray-600 mt-2 truncate">{image.caption}</p>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                      {isEditMode && (
                        <button
                          type="button"
                          onClick={() => removeExistingImage(index)}
                          className="opacity-0 group-hover:opacity-100 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all"
                          title="Delete image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {images.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">New Images</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((image, index) => (
                  <div key={`new-${index}`} className="border rounded-lg p-3 bg-white">
                    <div className="relative mb-3">
                      <img
                        src={image.preview}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        title="Remove image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <input
                      type="text"
                      value={image.caption}
                      onChange={(e) => handleCaptionChange(index, e.target.value)}
                      placeholder="Image caption (optional)"
                      className="w-full text-sm border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {(images.length + existingImages.length) === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No images uploaded yet. Please upload at least one image.</p>
            </div>
          )}
        </div>
      </div>

      {/* Form Actions */}
      <div className="border-t pt-6 flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {isEditMode ? 'Updating...' : 'Creating...'}
            </span>
          ) : (
            isEditMode ? 'Update Project' : 'Create Project'
          )}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;