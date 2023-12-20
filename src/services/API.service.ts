import axios from 'axios';

export const HttpRequest = axios.create({
  baseURL: process.env.API_URL,
});
