import '../css/styles.css';

import axios from 'axios';
// import randomWords from 'random-words';

import SearchApiService from './fetch-image';
import Utils from './util';
import renderGallery from './render-gallery';

const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more'),
  searchApiService: new SearchApiService(),
  utils: new Utils(),
  themeBtnL: document.querySelector('.them-l'),
  themeBtnD: document.querySelector('.them-d'),
  resetBtn: document.querySelector('.reset'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
refs.themeBtnL.addEventListener('click', refs.utils.darkMode);
refs.themeBtnD.addEventListener('click', refs.utils.darkMode);
refs.resetBtn.addEventListener('click', refs.utils.refreshPage);

function onSearch(event) {
  event.preventDefault();

  refs.searchApiService.query = event.currentTarget.elements.searchQuery.value;
  refs.searchApiService.resetPage();
  refs.utils.clearGallery();
  refs.searchApiService
    .fetchImage()
    .then(refs.utils.searchSubmitFilter)
    .then(renderGallery);
  refs.utils.addLoadMore();
}

function onLoadMoreBtnClick() {
  refs.searchApiService
    .fetchImage()
    .then(refs.utils.loadMoreFilter)
    .then(renderGallery);
}
