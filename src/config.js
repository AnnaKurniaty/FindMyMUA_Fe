export const config = {
  baseURL: 'http://localhost:8000/api',
  frontendURL: 'http://localhost:5173'
}

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');

  const defaultHeaders = {
    ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const finalOptions = {
    credentials: 'include',
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(`${config.baseURL}${endpoint}`, finalOptions);

  const responseData = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.log("Error:", responseData);
    throw new Error(responseData.message || 'API request failed');
  }

  return responseData;
}
