import '../css/styles.css';
// import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import randomWords from 'random-words';
import SearchApiService from './fetch-image';
import renderGallery from './render-gallery';
import darkMode from './dark-mode';

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const searchApiService = new SearchApiService();
const themeBtnL = document.querySelector('.them-l');
const themeBtnD = document.querySelector('.them-d');

let perPage = 40;

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
themeBtnL.addEventListener('click', darkMode);
themeBtnD.addEventListener('click', darkMode);

function onSearch(event) {
  event.preventDefault();
  perPage = 40;
  searchApiService.query = event.currentTarget.elements.searchQuery.value;
  searchApiService.resetPage();
  clearGallery();
  searchApiService.fetchImage().then(searchSubmitFilter).then(renderGallery);
  addLoadMore();
}

function onLoadMoreBtnClick() {
  searchApiService.fetchImage().then(loadMoreFilter).then(renderGallery);
}

function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

function addLoadMore() {
  loadMoreBtn.classList.add('hiden');
}

function removeLoadMore() {
  loadMoreBtn.classList.remove('hiden');
}

function searchSubmitFilter(value) {
  if (value.hits.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    removeLoadMore();
  } else if (value.hits.length > 0) {
    Notify.success(`Hooray! We found ${value.totalHits} images.`);
  }
  return value;
}

function loadMoreFilter(value) {
  perPage += value.hits.length;
  if (value.totalHits <= perPage) {
    Report.failure(
      'Search',
      "We're sorry, but you've reached the end of search results.",
      'Okay'
    );
    return loadMoreBtn.classList.remove('hiden');
  }
  return value;
}
// randomWords
// console.log(randomWords());
