import '../css/styles.css';
import '../css/text-anim.css';
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

async function onSearch(event) {
  event.preventDefault();

  refs.searchApiService.query = event.currentTarget.elements.searchQuery.value;
  refs.searchApiService.resetPage();
  refs.utils.clearGallery();
  refs.utils.addLoadMore();

  try {
    const fetchData = await refs.searchApiService.fetchImage();
    const filter = await refs.utils.searchSubmitFilter(fetchData);
    const render = await renderGallery(filter);
  } catch (error) {
    console.log(error);
  }
}

async function onLoadMoreBtnClick() {
  try {
    const fetchData = await refs.searchApiService.fetchImage();
    const filter = await refs.utils.loadMoreFilter(fetchData);
    const render = await renderGallery(filter);
  } catch (error) {
    console.log(error);
  }
}
