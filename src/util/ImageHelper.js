export const getFullImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    const baseurl = localStorage.getItem('baseUrl') || window.location.origin;
    const cleanBaseUrl = baseurl.endsWith('/') ? baseurl.slice(0, -1) : baseurl;
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    
    return `${cleanBaseUrl}${cleanUrl}`;
  };