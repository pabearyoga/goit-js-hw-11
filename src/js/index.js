import '../css/styles.css';
// import axios from 'axios';

import randomWords from 'random-words';
import fetchImage from './fetch-image';
import renderGallery from './render-gallery';
import resetPage from './fetch-image';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('[name="searchQuery"]');
const loadMoreBtn = document.querySelector('.load-more');
const aaa = document.querySelector('.photo-card');

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchValue = searchInput.value;

  document.querySelector('.gallery').innerHTML = '';
  resetPage();
  fetchImage(searchValue).then(images => renderGallery(images));
}

export default function onLoadMoreBtnClick() {
  const searchValue = searchInput.value;
  fetchImage(searchValue).then(images => renderGallery(images));
}

// randomWords
// console.log(randomWords());
