import '../css/styles.css';
import '../css/text-anim.css';
import '../css/history-search.css';

import 'animate.css';
import SearchApiService from './get-image';
import Utils from './util';
import renderGallery from './render-gallery';
import scroll from './scroll';
import Random from './random';
import HistorySearchApi from './history-search';
import homePage from './home-page';
import darkMode from './dark-mode';

const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('[name="searchQuery"'),
  searchBtn: document.querySelector('.search-btn'),
  historyBtn: document.querySelector('.history-btn'),
  loadMoreBtn: document.querySelector('.load-more'),
  searchApiService: new SearchApiService(),
  random: new Random(),
  utils: new Utils(),
  historySearchApi: new HistorySearchApi(),
  themeBtnL: document.querySelector('.them-l'),
  themeBtnD: document.querySelector('.them-d'),
  resetBtn: document.querySelector('.reset'),
  startAnimation: document.querySelector('.circle-animation'),
  historySearch: document.querySelector('.history-search'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
refs.searchBtn.addEventListener('click', refs.random.randomSearch);
refs.searchInput.addEventListener('input', refs.random.randomBtn);
refs.themeBtnL.addEventListener('click', darkMode);
refs.themeBtnD.addEventListener('click', darkMode);
refs.resetBtn.addEventListener('click', homePage);
refs.historyBtn.addEventListener(
  'click',
  refs.historySearchApi.showHistorySearch
);
refs.searchForm.addEventListener(
  'submit',
  refs.historySearchApi.renderHistorySearch
);
refs.historySearch.addEventListener(
  'click',
  refs.historySearchApi.onHistorySearchItemClick
);
refs.startAnimation.addEventListener('click', refs.utils.onTitleClick);

refs.random.randomBtn();

async function onSearch(event) {
  event.preventDefault();

  refs.searchApiService.query = event.currentTarget.elements.searchQuery.value;
  refs.searchApiService.resetPage();
  refs.utils.clearGallery();
  refs.utils.addLoadMore();
  refs.utils.hideStartTitle();

  try {
    const fetchData = await refs.searchApiService.fetchImage();
    const filter = await refs.utils.searchSubmitFilter(fetchData);
    const render = await renderGallery(filter);
  } catch (error) {
    console.log(error);
  }
  scroll();
}

async function onLoadMoreBtnClick() {
  try {
    const fetchData = await refs.searchApiService.fetchImage();
    const filter = await refs.utils.loadMoreFilter(fetchData);
    const render = await renderGallery(filter);
  } catch (error) {
    console.log(error);
  }
  scroll();
}
