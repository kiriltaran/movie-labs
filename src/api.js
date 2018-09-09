import axios from 'axios';

const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  params: {
    api_key: process.env.VUE_APP_API_KEY,
  },
});

const api = {
  getPopularMovies(page) {
    return request({
      method: 'GET',
      url: '/movie/popular',
      params: {
        page,
      },
    }).then(response => response.data);
  },
  getGenreList() {
    return request({
      method: 'GET',
      url: '/genre/movie/list',
    }).then(response => response.data);
  },
};

export default api;
