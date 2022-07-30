import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SearchApiService from './get-image';
const searchApiService = new SearchApiService();

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
    document
      .querySelector('.search')
      .classList.replace('hidden', 'animate__animated');
    document.querySelector('.search').classList.add('animate__bounceInDown');
  }
}
