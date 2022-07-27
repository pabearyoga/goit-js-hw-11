import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SearchApiService from './get-image';
import Random from './random';
const searchApiService = new SearchApiService();
const random = new Random();

export default class Utils {
  clearGallery() {
    document.querySelector('.gallery').innerHTML = '';
  }

  addLoadMore() {
    document.querySelector('.load-more').classList.add('hiden');
    document.querySelector('.search').classList.add('search-fixed');
  }

  searchSubmitFilter(value) {
    if (value.hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      document.querySelector('.load-more').classList.remove('hiden');
    } else if (value.hits.length > 0) {
      Notify.success(`Hooray! We found ${value.totalHits} images.`);
    }
    searchApiService.restPerPage();
    return value;
  }

  loadMoreFilter(value) {
    // if (value !== undefined) {
    searchApiService.incrementPerPage();
    if (value.totalHits < searchApiService.perPage) {
      document.querySelector('.load-more').classList.remove('hiden');
      return Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
    return value;
  }

  darkMode() {
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('.search').classList.toggle('dark');
    document.querySelector('[name="searchQuery"]').classList.toggle('input-d');
    document.querySelector('.search-form').classList.toggle('input-d');
    document.querySelector('.them-d').classList.toggle('dark-h');
    document.querySelector('.reset').classList.toggle('dark-h');
    document.querySelector('.history-btn').classList.toggle('dark-h');
    document.querySelector('.history-search').style.backgroundColor = '#fff';
    document.querySelector('.history-search__title').style.backgroundColor =
      '#fff';

    if (document.querySelector('.search').classList.contains('dark')) {
      document.querySelector('.them-l').style.display = 'none';
      document.querySelector('.them-d').style.display = 'block';
      document.querySelector('.history-search').style.backgroundColor =
        '#303134';
      document.querySelector('.history-search__title').style.backgroundColor =
        '#303134';

      return;
    }
    document.querySelector('.them-d').style.display = 'none';
    document.querySelector('.them-l').style.display = 'block';
    // document.querySelector('.history-search').style.backgroundColor = '#303134';
    // document.querySelector('.history-search__title').style.backgroundColor =
    //   '#303134';
  }

  refreshPage() {
    document.querySelector('.load-more').classList.remove('hiden');
    document.querySelector('.search').classList.remove('search-fixed');
    document.querySelector('.gallery').innerHTML = '';
    document.querySelector('.search-form').reset();
    random.randomBtn();
    document.querySelector('.circle-animation').classList.remove('hide');
    document.querySelector('.search').classList.remove('animate__bounceInDown');
    document.querySelector('.search').classList.add('animate__backOutUp');
    document
      .querySelector('.circle-animation')
      .classList.remove('animate__backOutUp');
    document
      .querySelector('.circle-animation')
      .classList.add('animate__bounceInDown');
    if (document.querySelector('.start-page').classList.contains('hide')) {
      document.querySelector('.start-page').classList.remove('hide');
    }
  }

  hideStartTitle() {
    document.querySelector('.start-page').classList.add('hide');
  }

  onTitleClick() {
    if (
      document
        .querySelector('.circle-animation')
        .classList.contains('animate__animated')
    ) {
      document
        .querySelector('.circle-animation')
        .classList.remove('animate__animated');
      document
        .querySelector('.circle-animation')
        .classList.remove('animate__bounceInDown');
    }
    document
      .querySelector('.circle-animation')
      .classList.add('animate__animated');
    document
      .querySelector('.circle-animation')
      .classList.add('animate__backOutUp');
    document.querySelector('.search').classList.remove('hidden');
    document.querySelector('.search').classList.add('animate__animated');
    document.querySelector('.search').classList.add('animate__bounceInDown');
  }

  showHistorySearch() {
    console.log('history');
    document.querySelector('.history-search-wrapper').classList.remove('hide');

    if (
      document
        .querySelector('.history-search')
        .classList.contains('animate__animated')
    ) {
      document
        .querySelector('.history-search')
        .classList.add('animate__backOutUp');

      setTimeout(() => {
        document
          .querySelector('.history-search')
          .classList.remove('animate__animated');
        document
          .querySelector('.history-search')
          .classList.remove('animate__backOutUp');
        document
          .querySelector('.history-search-wrapper')
          .classList.toggle('hide');
      }, 500);
    }

    document
      .querySelector('.history-search')
      .classList.add('animate__animated');
    document
      .querySelector('.history-search')
      .classList.toggle('animate__bounceInDown');
  }
}
