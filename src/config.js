export const config = {
  baseURL: 'http://localhost:8000/api',
  frontendURL: 'http://localhost:5173'
}

export async function apiFetch(endpoint, options = {}) {
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
    url: `${config.baseURL}${endpoint}`,
    options: finalOptions,
    body: finalOptions.body
  });

  const response = await fetch(`${config.baseURL}${endpoint}`, finalOptions);

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
