export const config = {
  baseURL: 'https://findmymua-production.up.railway.app/api',
  frontendURL: 'http://localhost:5173'
}

export async function apiFetch(endpoint, options = {}) {
  // Remove leading slash from endpoint if it exists and baseURL already ends with /api
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  
  const token = localStorage.getItem('token');

  const defaultHeaders = {
    ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` }),
    'Accept': 'application/json',
  };

  const finalOptions = {
    // Removed credentials: 'include' because token-based auth does not require cookies
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  // Log the request for debugging
  console.log('API Request:', {
    url: `${config.baseURL}/${normalizedEndpoint}`,
    options: finalOptions,
    body: finalOptions.body
  });

  // Jika body adalah FormData, tampilkan isi FormData
  if (finalOptions.body instanceof FormData) {
    console.log('FormData content:');
    for (var pair of finalOptions.body.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
  }

  const response = await fetch(`${config.baseURL}/${normalizedEndpoint}`, finalOptions);

  const responseData = await response.json().catch(() => ({}));

  // Log the response for debugging
  console.log('API Response:', {
    status: response.status,
    statusText: response.statusText,
    data: responseData
  });

  if (!response.ok) {
    console.log("Error:", responseData);
    throw new Error(responseData.message || 'API request failed');
  }

  return responseData;
}
