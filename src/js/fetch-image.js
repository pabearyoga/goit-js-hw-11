import { Loading } from 'notiflix/build/notiflix-loading-aio';
import axios from 'axios';

export default class SearchApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
    this.perPage = this.per_page;
  }

  async fetchImage() {
    const KEY = '28778434-1483e606d41ba08d2549939d9';
    Loading.pulse({
      svgColor: '#4169e1',
    });
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`
      );
      const data = await response.data;
      this.incrementPage();
      Loading.remove();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  incrementPerPage() {
    this.perPage += this.per_page;
  }

  restPerPage() {
    this.perPage = this.per_page;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
