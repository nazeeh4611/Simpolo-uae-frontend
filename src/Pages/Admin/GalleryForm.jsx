import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const GalleryForm = ({ isEditMode = false, itemData = null, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    size: '',
    finish: '',
    usage: '',
    thickness: '',
    waterAbsorption: '',
    resistance: ''
  });

  useEffect(() => {
    fetchCategories();
    if (isEditMode && itemData) {
      loadGalleryData();
    }
  }, [isEditMode, itemData]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/admin/gallery/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories');
    }
  };

  const loadGalleryData = () => {
    setFormData({
      title: itemData.title || '',
      description: itemData.description || '',
      category: itemData.category || '',
      size: itemData.specifications?.size || '',
      finish: itemData.specifications?.finish || '',
      usage: itemData.specifications?.usage || '',
      thickness: itemData.specifications?.thickness || '',
      waterAbsorption: itemData.specifications?.waterAbsorption || '',
      resistance: itemData.specifications?.resistance || ''
    });
    
    setExistingImages(itemData.images || []);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024
    );

    if (validFiles.length !== files.length) {
      toast.error('Some files were rejected. Only images under 10MB are allowed.');
    }

    const newImages = validFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      altText: ''
    }));

    setImages(prev => [...prev, ...newImages].slice(0, 10));
  };

  const removeImage = (index) => {
    const image = images[index];
    if (image.preview) {
      URL.revokeObjectURL(image.preview);
    }
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = async (index) => {
    if (!isEditMode || !itemData) return;
    
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await axios.delete(`/api/admin/gallery/${index}/${itemData._id}`);
        setExistingImages(prev => prev.filter((_, i) => i !== index));
        toast.success('Image deleted successfully');
      } catch (error) {
        console.error('Error deleting image:', error);
        toast.error('Failed to delete image');
      }
    }
  };

  const handleAltTextChange = (index, value) => {
    setImages(prev => prev.map((img, i) => 
      i === index ? { ...img, altText: value } : img
    ));
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      toast.error('Title is required');
      return false;
    }
    if (!formData.category) {
      toast.error('Category is required');
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
        if (formData[key] !== undefined && formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      images.forEach((image, index) => {
        formDataToSend.append('images', image.file);
        formDataToSend.append(`altText_${index}`, image.altText);
      });

      if (isEditMode && itemData) {
        await axios.put(`/api/admin/gallery/${itemData._id}`, formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        toast.success('Gallery item updated successfully');
      } else {
        await axios.post('/api/admin/gallery', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        toast.success('Gallery item created successfully');
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving gallery item:', error);
      toast.error(error.response?.data?.message || 'Error saving gallery item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 lg:space-y-8">
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Product Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              placeholder="Enter product title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            >
              <option value="">Select Category</option>
              {Array.isArray(categories) && categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Product Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            placeholder="Describe the product features and benefits..."
          />
        </div>
      </div>

      <div className="border-t pt-4 md:pt-6 lg:pt-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Specifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Size
            </label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              placeholder="e.g., 600x600 mm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Finish
            </label>
            <input
              type="text"
              name="finish"
              value={formData.finish}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              placeholder="e.g., Matt, Glossy, Polished"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Usage
            </label>
            <input
              type="text"
              name="usage"
              value={formData.usage}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              placeholder="e.g., Floor, Wall, Both"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Thickness
            </label>
            <input
              type="text"
              name="thickness"
              value={formData.thickness}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              placeholder="e.g., 10mm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Water Absorption
            </label>
            <input
              type="text"
              name="waterAbsorption"
              value={formData.waterAbsorption}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              placeholder="e.g., <0.5%"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Resistance
            </label>
            <input
              type="text"
              name="resistance"
              value={formData.resistance}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              placeholder="e.g., Frost, Stain, Scratch"
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-4 md:pt-6 lg:pt-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 lg:mb-6">Product Images</h2>
        
        <div className="mb-4 md:mb-6 lg:mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2 md:mb-3 lg:mb-4">
            Upload Images (Max 10 images, 10MB each)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="gallery-image-upload"
            />
            <label htmlFor="gallery-image-upload" className="cursor-pointer block">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400 mb-2 md:mb-3 lg:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 font-medium text-sm md:text-base">Click to upload product images</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">PNG, JPG, JPEG up to 10MB</p>
              </div>
            </label>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {existingImages.length > 0 && (
            <div>
              <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 md:mb-3 lg:mb-4">Existing Images</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
                {existingImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image.url}
                      alt={image.altText}
                      className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                      {isEditMode && (
                        <button
                          type="button"
                          onClick={() => removeExistingImage(index)}
                          className="opacity-0 group-hover:opacity-100 bg-red-500 text-white p-1.5 md:p-2 rounded-full hover:bg-red-600 transition-all"
                        >
                          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 md:mb-3 lg:mb-4">New Images</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
                {images.map((image, index) => (
                  <div key={index} className="border rounded-lg p-2 md:p-3 bg-white">
                    <div className="relative mb-1 md:mb-2 lg:mb-3">
                      <img
                        src={image.preview}
                        alt="Preview"
                        className="w-full h-20 md:h-24 lg:h-32 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 bg-red-500 text-white rounded-full p-0.5 md:p-1 hover:bg-red-600 transition-colors"
                      >
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <input
                      type="text"
                      value={image.altText}
                      onChange={(e) => handleAltTextChange(index, e.target.value)}
                      placeholder="Alt text"
                      className="w-full text-xs md:text-sm border border-gray-300 rounded px-2 md:px-3 py-1 md:py-1.5 lg:py-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t pt-3 md:pt-4 lg:pt-6 flex flex-col sm:flex-row justify-end gap-2 md:gap-3 lg:gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-full sm:w-auto px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors text-sm md:text-base"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors text-sm md:text-base"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-3 w-3 md:h-4 md:w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {isEditMode ? 'Updating...' : 'Creating...'}
            </span>
          ) : (
            isEditMode ? 'Update Gallery Item' : 'Create Gallery Item'
          )}
        </button>
      </div>
    </form>
  );
};

export default GalleryForm;