import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import GalleryForm from './GalleryForm';

const GalleryList = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [categoriese, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalItems: 0,
    limit: 10
  });
  const categories =[  'Porcelain Tiles',
  'Porcelain Tiles Fabrications',
  'Slab Tiles',
  'Ceramic Tiles',
  'Outdoor Heavy-Duty Tiles',
  'Mosaic Fabrications from Tiles',
  'Swimming Pool Tiles',
  'Marble and Granite',
  'Marble Countertops and Fabrications',
  'Sanitary Ware',
  'Bathroom Fittings']

  useEffect(() => {
    fetchCategories();
    fetchGalleryItems();
  }, [pagination.page, selectedCategory, search]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/admin/gallery/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/admin/gallery', {
        params: {
          page: pagination.page,
          limit: pagination.limit,
          category: selectedCategory !== 'all' ? selectedCategory : undefined,
          search: search || undefined
        }
      });
      setGalleryItems(response.data.galleryItems || []);
      setPagination(prev => ({
        ...prev,
        totalPages: response.data.totalPages || 1,
        totalItems: response.data.totalItems || 0
      }));
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAddModal = () => {
    setSelectedItem(null);
    setIsEditMode(false);
    setShowModal(true);
  };

  const handleOpenEditModal = (item) => {
    setSelectedItem(item);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setIsEditMode(false);
  };

  const handleSuccess = () => {
    handleCloseModal();
    fetchGalleryItems();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this gallery item?')) {
      try {
        await axios.delete(`/api/admin/gallery/${id}`);
        fetchGalleryItems();
        toast.success('Gallery item deleted successfully');
      } catch (error) {
        console.error('Error deleting gallery item:', error);
        toast.error('Failed to delete gallery item');
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPagination(prev => ({ ...prev, page: 1 }));
    fetchGalleryItems();
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, page: newPage }));
    }
  };

  const getSpecificationText = (specs) => {
    if (!specs) return '';
    const parts = [];
    if (specs.size) parts.push(`Size: ${specs.size}`);
    if (specs.finish) parts.push(`Finish: ${specs.finish}`);
    if (specs.thickness) parts.push(`Thickness: ${specs.thickness}`);
    return parts.join(' • ');
  };

  return (
    <div className="space-y-4 md:space-y-6 p-3 md:p-4 lg:p-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Gallery Management</h1>
          <p className="text-xs md:text-sm lg:text-base text-gray-600 mt-1">Manage all gallery items and product showcases</p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-lg font-medium flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
        >
          <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Item
        </button>
      </div>

      <div className="bg-white rounded-lg md:rounded-xl shadow p-3 md:p-4 lg:p-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-3 md:mb-4 lg:mb-6">
          <div className="flex-1">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search gallery items..."
                  className="w-full border border-gray-300 rounded-l-lg px-3 md:px-4 py-2 md:py-2.5 lg:py-3 pl-8 md:pl-9 lg:pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
                <svg className="absolute left-2.5 md:left-3 top-2.5 md:top-2.5 lg:top-3.5 w-3 h-3 md:w-4 md:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-r-lg hover:bg-blue-600 transition-colors font-medium text-sm md:text-base"
              >
                Search
              </button>
            </form>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setPagination(prev => ({ ...prev, page: 1 }));
            }}
            className="border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-2.5 lg:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
          >
            <option value="all">All Categories</option>
            {Array.isArray(categories) && categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center py-8 md:py-10 lg:py-12">
            <div className="animate-spin rounded-full h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : galleryItems.length === 0 ? (
          <div className="text-center py-6 md:py-8 lg:py-12">
            <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-gray-400 mx-auto mb-2 md:mb-3 lg:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg mb-1 md:mb-2 font-medium">No gallery items found</p>
            <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 lg:mb-6">Get started by adding your first gallery item</p>
            <button
              onClick={handleOpenAddModal}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-lg font-medium inline-flex items-center text-sm md:text-base"
            >
              <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Gallery Item
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 md:px-3 lg:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-2 md:px-3 lg:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Category
                    </th>
                    <th className="px-2 md:px-3 lg:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Specifications
                    </th>
                    <th className="px-2 md:px-3 lg:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Images
                    </th>
                    <th className="px-2 md:px-3 lg:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell">
                      Date Added
                    </th>
                    <th className="px-2 md:px-3 lg:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {galleryItems.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-2 md:px-3 lg:px-6 py-3 md:py-4">
                        <div className="flex items-center">
                          {item.images?.[0] && (
                            <img
                              src={item.images[0].url}
                              alt={item.title}
                              className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-cover rounded-lg"
                            />
                          )}
                          <div className="ml-2 md:ml-3 lg:ml-4">
                            <div className="font-medium text-gray-900 line-clamp-1 text-xs md:text-sm lg:text-base">{item.title}</div>
                            <div className="text-xs md:text-sm text-gray-500 line-clamp-2 hidden sm:block">{item.description || 'No description'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 md:px-3 lg:px-6 py-3 md:py-4 hidden sm:table-cell">
                        <span className="inline-flex items-center px-1.5 md:px-2 lg:px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-2 md:px-3 lg:px-6 py-3 md:py-4 hidden lg:table-cell">
                        <div className="text-xs md:text-sm text-gray-900">
                          {getSpecificationText(item.specifications) || 'No specifications'}
                        </div>
                      </td>
                      <td className="px-2 md:px-3 lg:px-6 py-3 md:py-4 hidden md:table-cell">
                        <div className="flex items-center">
                          <span className="text-xs md:text-sm text-gray-900">{item.images?.length || 0}</span>
                          <span className="text-xs text-gray-500 ml-1">images</span>
                        </div>
                      </td>
                      <td className="px-2 md:px-3 lg:px-6 py-3 md:py-4 whitespace-nowrap hidden xl:table-cell">
                        <div className="text-xs md:text-sm text-gray-900">
                          {new Date(item.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </td>
                      <td className="px-2 md:px-3 lg:px-6 py-3 md:py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-3">
                          <button
                            onClick={() => handleOpenEditModal(item)}
                            className="text-blue-500 hover:text-blue-600 p-1 md:p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => window.open(`/gallery/${item._id}`, '_blank')}
                            className="text-green-500 hover:text-green-600 p-1 md:p-1.5 hover:bg-green-50 rounded-lg transition-colors hidden sm:block"
                            title="View"
                          >
                            <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="text-red-500 hover:text-red-600 p-1 md:p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {pagination.totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between mt-3 md:mt-4 lg:mt-6 pt-3 md:pt-4 lg:pt-6 border-t border-gray-200 gap-2 md:gap-3 lg:gap-4">
                <div className="text-xs md:text-sm text-gray-700">
                  Showing <span className="font-medium">{((pagination.page - 1) * pagination.limit) + 1}</span> to{' '}
                  <span className="font-medium">
                    {Math.min(pagination.page * pagination.limit, pagination.totalItems)}
                  </span> of{' '}
                  <span className="font-medium">{pagination.totalItems}</span> items
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <button
                    onClick={() => handlePageChange(pagination.page - 1)}
                    disabled={pagination.page === 1}
                    className="px-2 md:px-3 lg:px-4 py-1.5 md:py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs md:text-sm lg:text-base"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                      let pageNum;
                      if (pagination.totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (pagination.page <= 3) {
                        pageNum = i + 1;
                      } else if (pagination.page >= pagination.totalPages - 2) {
                        pageNum = pagination.totalPages - 4 + i;
                      } else {
                        pageNum = pagination.page - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-lg transition-colors text-xs md:text-sm lg:text-base ${
                            pagination.page === pageNum
                              ? 'bg-blue-500 text-white'
                              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => handlePageChange(pagination.page + 1)}
                    disabled={pagination.page === pagination.totalPages}
                    className="px-2 md:px-3 lg:px-4 py-1.5 md:py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs md:text-sm lg:text-base"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        <div className="bg-white rounded-lg md:rounded-xl shadow p-3 md:p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-1.5 md:p-2 lg:p-3 rounded-full bg-blue-100 text-blue-500">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-2 md:ml-3 lg:ml-4">
              <h3 className="text-xs md:text-sm font-medium text-gray-500">Total Items</h3>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-0.5 md:mt-1">{pagination.totalItems}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg md:rounded-xl shadow p-3 md:p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-1.5 md:p-2 lg:p-3 rounded-full bg-green-100 text-green-500">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
            </div>
            <div className="ml-2 md:ml-3 lg:ml-4">
              <h3 className="text-xs md:text-sm font-medium text-gray-500">Categories</h3>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-0.5 md:mt-1">{categories.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg md:rounded-xl shadow p-3 md:p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-1.5 md:p-2 lg:p-3 rounded-full bg-purple-100 text-purple-500">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-2 md:ml-3 lg:ml-4">
              <h3 className="text-xs md:text-sm font-medium text-gray-500">Images</h3>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-0.5 md:mt-1">
                {galleryItems.reduce((total, item) => total + (item.images?.length || 0), 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg md:rounded-xl shadow p-3 md:p-4 lg:p-6">
          <div className="flex items-center">
            <div className="p-1.5 md:p-2 lg:p-3 rounded-full bg-yellow-100 text-yellow-500">
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-2 md:ml-3 lg:ml-4">
              <h3 className="text-xs md:text-sm font-medium text-gray-500">Last Added</h3>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-0.5 md:mt-1">
                {galleryItems.length > 0 
                  ? new Date(galleryItems[0].createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                  : 'N/A'
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="flex items-center justify-center min-h-screen px-4 py-6 sm:px-6 lg:px-8">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
              onClick={handleCloseModal}
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            ></div>
            
            {/* Modal Content */}
            <div 
              className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl mx-auto z-[10000] max-h-[90vh] overflow-y-auto"
              style={{ position: 'relative' }}
            >
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10 pb-3 border-b">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900">
                    {isEditMode ? 'Edit Gallery Item' : 'Add New Gallery Item'}
                  </h3>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none transition-colors p-2 hover:bg-gray-100 rounded-full"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <GalleryForm 
                  isEditMode={isEditMode} 
                  itemData={selectedItem}
                  onSuccess={handleSuccess}
                  onCancel={handleCloseModal}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryList;