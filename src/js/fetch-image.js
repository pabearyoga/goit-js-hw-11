export default class SearchApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImage() {
    const KEY = '28778434-1483e606d41ba08d2549939d9';

    return fetch(
      `https://pixabay.com/api/?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json().then(data => {
        this.incrementPage();
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

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
