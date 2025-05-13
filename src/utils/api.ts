import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
   timeout: 10000,
});
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    
    if (error.code === 'ERR_NETWORK' && !config.__isRetry) {
      config.__isRetry = true;
      
      await new Promise(resolve => setTimeout(resolve, 500));
      return api(config);
    }
    
    throw error;
  }
)
export default api;