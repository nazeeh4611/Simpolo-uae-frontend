import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { baseurl } from '../../util/Base';
import { ImageWithFallback } from '../../util/Fallback';

const projectCategories = [
  'Residential',
  'Commercial',
  'Hospitality',
  'Government',
  'Pool & Villa'
];

const getFullImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  const cleanBaseUrl = baseurl.endsWith('/') ? baseurl.slice(0, -1) : baseurl;
  const cleanUrl = url.startsWith('/') ? url : `/${url}`;
  return `${cleanBaseUrl}${cleanUrl}`;
};

const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.mpg', '.mpeg', '.mov', '.avi', '.wmv', '.flv', '.webm'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

const VideoPreview = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-200 ${className}`}>
        <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <p className="text-xs text-gray-500 px-2 text-center mt-1">Video</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <video
        src={src}
        className="w-full h-full object-cover"
        onError={() => setError(true)}
        muted
        playsInline
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ProjectForm = ({ isEditMode = false, projectData = null, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
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
  const token = localStorage.getItem('adminToken');
  const imageUrlsRef = useRef(new Map());

  useEffect(() => {
    if (isEditMode && projectData) {
      loadProjectData();
    }
  }, [isEditMode, projectData]);

  useEffect(() => {
    return () => {
      imageUrlsRef.current.forEach((url) => {
        if (url && typeof url === 'string' && url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
      imageUrlsRef.current.clear();
    };
  }, []);

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

    if (projectData.images && Array.isArray(projectData.images)) {
      const processedImages = projectData.images.map((img, idx) => {
        let imageUrl = '';
        let caption = '';
        let imageId = '';

        if (typeof img === 'string') {
          imageUrl = img;
          imageId = `img-${Date.now()}-${idx}`;
        } else if (img && typeof img === 'object') {
          imageUrl = img.url || '';
          caption = img.caption || '';
          imageId = img._id || `img-${Date.now()}-${idx}`;
        }
        
        return {
          url: imageUrl,
          caption: caption,
          id: imageId,
          key: img.key || '',
          original: img,
          type: isVideoFile(imageUrl) ? 'video' : 'image'
        };
      });
      
      setExistingImages(processedImages);
    } else {
      setExistingImages([]);
    }

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
      (file.type.startsWith('image/') || file.type.startsWith('video/')) && 
      file.size <= 50 * 1024 * 1024
    );

    if (validFiles.length !== files.length) {
      toast.error('Some files were rejected. Only images/videos under 50MB are allowed.');
    }

    const currentTotal = images.length + existingImages.length;
    const remainingSlots = 10 - currentTotal;

    if (remainingSlots <= 0) {
      toast.error('Maximum 10 media files allowed per project');
      return;
    }

    const filesToAdd = validFiles.slice(0, remainingSlots);
    if (filesToAdd.length < validFiles.length) {
      toast.error(`Only ${remainingSlots} more file(s) can be added`);
    }

    const newImages = filesToAdd.map(file => {
      let previewUrl = imageUrlsRef.current.get(file);
      if (!previewUrl) {
        previewUrl = URL.createObjectURL(file);
        imageUrlsRef.current.set(file, previewUrl);
      }
      return {
        file,
        preview: previewUrl,
        caption: '',
        id: Date.now() + Math.random(),
        type: file.type.startsWith('video/') ? 'video' : 'image'
      };
    });

    setImages(prev => [...prev, ...newImages]);
    e.target.value = '';
  };

  const removeImage = (index) => {
    setImages(prev => {
      const imageToRemove = prev[index];
      if (imageToRemove.preview && imageToRemove.file) {
        const url = imageUrlsRef.current.get(imageToRemove.file);
        if (url && typeof url === 'string' && url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
          imageUrlsRef.current.delete(imageToRemove.file);
        }
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const removeExistingImage = async (imageIndex) => {
    if (!isEditMode || !projectData) return;

    toast.custom((t) => (
      <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Delete Media File</p>
              <p className="mt-1 text-sm text-gray-500">Are you sure you want to delete this media file? This action cannot be undone.</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={async () => {
              try {
                await axios.delete(`${baseurl}admin/projects/${projectData._id}/images/${imageIndex}`, {
                  headers: { Authorization: `Bearer ${token}` }
                });
                setExistingImages(prev => prev.filter((_, i) => i !== imageIndex));
                toast.success('Media file deleted successfully');
                toast.dismiss(t.id);
              } catch (error) {
                console.error('Error deleting media file:', error);
                toast.error(error.response?.data?.message || 'Failed to delete media file');
                toast.dismiss(t.id);
              }
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    ), {
      duration: Infinity,
    });
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
      toast.error('At least one image or video is required');
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
  
      // Append basic form data
      const formKeys = ['title', 'client', 'location', 'description', 'category', 'scope', 'featured'];
      formKeys.forEach(key => {
        if (formData[key] !== undefined && formData[key] !== null) {
          if (key === 'featured') {
            formDataToSend.append(key, formData[key].toString());
          } else {
            formDataToSend.append(key, formData[key]);
          }
        }
      });
  
      // Append completion date only once
      if (formData.completionDate) {
        formDataToSend.append('completionDate', formData.completionDate);
      }
  
      // Append productsUsed as JSON string
      const validProducts = productsUsed.filter(p => p.name && p.name.trim());
      if (validProducts.length > 0) {
        formDataToSend.append('productsUsed', JSON.stringify(validProducts));
      }
  
      // Append images with their captions
      images.forEach((image, index) => {
        if (image.file) {
          formDataToSend.append('images', image.file);
          formDataToSend.append(`caption_${index}`, image.caption || '');
        }
      });
  
      console.log("Form data being sent:");
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }
  
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      };
  
      if (isEditMode && projectData) {
        const response = await axios.put(`${baseurl}admin/projects/${projectData._id}`, formDataToSend, config);
        console.log("Update response:", response.data);
        toast.success('Project updated successfully');
      } else {
        const response = await axios.post(`${baseurl}admin/projects`, formDataToSend, config);
        console.log("Create response:", response.data);
        toast.success('Project created successfully');
      }
  
      // Clean up blob URLs
      images.forEach(image => {
        if (image.preview && image.file) {
          const url = imageUrlsRef.current.get(image.file);
          if (url && typeof url === 'string' && url.startsWith('blob:')) {
            URL.revokeObjectURL(url);
            imageUrlsRef.current.delete(image.file);
          }
        }
      });
  
      onSuccess();
    } catch (error) {
      console.error('Error saving project:', error);
      console.error('Error response:', error.response?.data);
      toast.error(error.response?.data?.message || error.response?.data?.error || 'Error saving project');
    } finally {
      setLoading(false);
    }
  };

  const getCategoriesFromProjects = () => {
    const allCategories = new Set(projectCategories);
    return Array.from(allCategories);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="border-b pb-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter project title"
              required
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter client name"
              required
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter project location"
              required
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              required
            >
              <option value="">Select Category</option>
              {getCategoriesFromProjects().map((category) => (
                <option key={category} value={category}>{category}</option>
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

          <div className="flex items-center pt-8">
            <input
              type="checkbox"
              name="featured"
              id="featured"
              checked={formData.featured}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
              Mark as Featured Project
            </label>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe the project in detail..."
            required
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

      <div className="border-t pt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Project Media Files <span className="text-red-500">*</span>
        </h2>

        {(images.length + existingImages.length) < 10 && (
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Upload Images/Videos (Max 10 files, 50MB each)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleImageUpload}
                className="hidden"
                id="project-image-upload"
              />
              <label htmlFor="project-image-upload" className="cursor-pointer block">
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 font-medium">Click to upload images or videos</p>
                  <p className="text-sm text-gray-500 mt-1">Images (PNG, JPG, JPEG) or Videos (MP4, MPG, MOV) up to 50MB</p>
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
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Existing Media Files ({existingImages.length})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {existingImages.map((media, index) => (
                  <div key={`existing-${media.id || index}`} className="relative group">
                    <div className="relative w-full h-40 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                      {media.type === 'video' ? (
                        <VideoPreview
                          src={getFullImageUrl(media.url)}
                          alt={media.caption || `Video ${index + 1}`}
                          className="w-full h-full"
                        />
                      ) : (
                        <ImageWithFallback
                          src={getFullImageUrl(media.url)}
                          alt={media.caption || `Image ${index + 1}`}
                          className="w-full h-full object-cover relative z-0"
                        />
                      )}
                    </div>
                    {media.caption && (
                      <p className="text-xs text-gray-600 mt-2 truncate">{media.caption}</p>
                    )}
                    <div className="absolute top-2 left-2 z-10">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                        {media.type === 'video' ? 'VIDEO' : 'IMAGE'}
                      </span>
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                      {isEditMode && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-auto">
                          <button
                            type="button"
                            onClick={() => removeExistingImage(index)}
                            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                            title="Delete media file"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {images.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">New Media Files ({images.length})</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((media, index) => (
                  <div key={`new-${media.id || index}`} className="border rounded-lg p-3 bg-white">
                    <div className="relative mb-3">
                      <div className="w-full h-32 rounded overflow-hidden bg-gray-100">
                        {media.type === 'video' ? (
                          <VideoPreview
                            src={media.preview}
                            alt="Video preview"
                            className="w-full h-full"
                          />
                        ) : (
                          <ImageWithFallback
                            src={media.preview}
                            alt="Image preview"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="absolute top-2 left-2 z-10">
                        <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                          {media.type === 'video' ? 'VIDEO' : 'IMAGE'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors z-10"
                        title="Remove media file"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <input
                      type="text"
                      value={media.caption}
                      onChange={(e) => handleCaptionChange(index, e.target.value)}
                      placeholder="Caption (optional)"
                      className="w-full text-sm border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {(images.length + existingImages.length) === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No media files uploaded yet. Please upload at least one image or video.</p>
            </div>
          )}
        </div>
      </div>

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