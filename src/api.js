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
  getMovieInfo(id) {
    return request({
      method: 'GET',
      url: `/movie/${id}`,
      params: {
        movie_id: id,
      },
    }).then(response => response.data);
  },
  getRelatedMovies(id) {
    return request({
      method: 'GET',
      url: `/movie/${id}/similar`,
      params: {
        movie_id: id,
      },
    }).then(response => response.data);
  },
  getMoviesByGenre(id, page) {
    return request({
      method: 'GET',
      url: '/discover/movie',
      params: {
        with_genres: id,
        page,
      },
    }).then(response => response.data);
  },
};

export default api;
