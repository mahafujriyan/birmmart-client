import axios from 'axios';
import auth from '../Firebase/firebase.init';

const api = axios.create({
  baseURL: 'https://birmmart-server.vercel.app', 
  headers: {
    'Content-Type': 'application/json',
  },
});


// jwt 
api.interceptors.request.use(
  async (config) => {
 
    const user = auth.currentUser;

    if (user) {
      try {
        const token = await user.getIdToken(); 
        config.headers.Authorization = `Bearer ${token}`;
      } catch (err) {
        console.error("Token fetch failed", err);
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);


export default api;
