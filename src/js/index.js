import '../css/styles.css';
import '../css/text-anim.css';
import 'animate.css';
import SearchApiService from './get-image';
import Utils from './util';
import renderGallery from './render-gallery';
import scroll from './scroll';
import Random from './random';

const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('[name="searchQuery"'),
  searchBtn: document.querySelector('.search-btn'),
  loadMoreBtn: document.querySelector('.load-more'),
  searchApiService: new SearchApiService(),
  random: new Random(),
  utils: new Utils(),
  themeBtnL: document.querySelector('.them-l'),
  themeBtnD: document.querySelector('.them-d'),
  resetBtn: document.querySelector('.reset'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
refs.searchBtn.addEventListener('click', refs.random.randomSearch);
refs.searchInput.addEventListener('input', refs.random.randomBtn);
refs.themeBtnL.addEventListener('click', refs.utils.darkMode);
refs.themeBtnD.addEventListener('click', refs.utils.darkMode);
refs.resetBtn.addEventListener('click', refs.utils.refreshPage);

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
