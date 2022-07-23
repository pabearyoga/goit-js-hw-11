import { Loading } from 'notiflix/build/notiflix-loading-aio';
export default class SearchApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
    this.perPage = this.per_page;
  }

  fetchImage() {
    const KEY = '28778434-1483e606d41ba08d2549939d9';
    Loading.pulse({
      svgColor: '#4169e1',
    });
    return fetch(
      `https://pixabay.com/api/?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json().then(data => {
        this.incrementPage();
        Loading.remove();
        return data;
      });
    });
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
