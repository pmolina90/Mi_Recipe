import axios from 'axios';
import { API_URL } from '../constants/index'; // Import API_URL from your constants file

const customAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  },
});

// Add any custom interceptors or configurations as needed

export default customAxios;