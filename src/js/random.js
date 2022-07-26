import randomWords from 'random-words';

// if (document.querySelector('[name="searchQuery"').value === '') {
//   document.querySelector('.search-btn').textContent = 'Random';
// } else {
//   document.querySelector('.search-btn').textContent = 'Search';
// }
export default class Random {
  constructor() {}

  randomSearch() {
    if (document.querySelector('.search-btn').textContent === 'Random') {
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
