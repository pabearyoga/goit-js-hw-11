import randomWords from 'random-words';

export default class Random {
  constructor() {}

  randomSearch() {
    if (document.querySelector('.search-btn').textContent === 'Random') {
      document.querySelector('[name="searchQuery"').value = randomWords();
    }
  }

  randomBtn() {
    if (document.querySelector('[name="searchQuery"').value === '') {
      document.querySelector('.search-btn').textContent = 'Random';
    } else {
      document.querySelector('.search-btn').textContent = 'Search';
    }
  }
}
