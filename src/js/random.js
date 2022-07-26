import randomWords from 'random-words';

// if (document.querySelector('[name="searchQuery"').value === '') {
//   document.querySelector('.search-btn').textContent = 'Random';
// } else {
//   document.querySelector('.search-btn').textContent = 'Search';
// }
export default class Random {
  constructor() {}

  randomSearch() {
    document.querySelector('[name="searchQuery"').value = '';
    if (document.querySelector('[name="searchQuery"').value === '') {
      document.querySelector('[name="searchQuery"').value = randomWords();
      document.querySelector('.search-btn').click();
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

// export default function randomSearch() {
//   if (document.querySelector('[name="searchQuery"').value === '') {
//     document.querySelector('[name="searchQuery"').value = randomWords();
//     document.querySelector('.search-btn').click();
//   }
// }

// export default function randomBtn() {
//   if (document.querySelector('[name="searchQuery"').value === '') {
//     document.querySelector('.search-btn').textContent = 'Random';
//   } else {
//     document.querySelector('.search-btn').textContent = 'Search';
//   }
// }
