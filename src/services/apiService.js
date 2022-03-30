import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json' }
});

const PAGE_NUMBER = 1;
const PAGE_SIZE = 10;

const get = (criteria) => {
  return axiosInstance.get(`/search?q=${criteria}&_page=${PAGE_NUMBER}&_limit=${PAGE_SIZE}`);
};

const put = (object) => {
  const { id } = object;
  return axiosInstance.put(`/search/${id}`, object);
}

export { get, put };