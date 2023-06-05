import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accept: 'application/json',
  },
});

authFetch.interceptors.request.use(
  () => {},
  () => {}
);
authFetch.interceptors.response.use(
  () => {},
  () => {}
);

export default authFetch;
