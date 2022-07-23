import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import SearchApiService from './fetch-image';

const searchApiService = new SearchApiService();

export default class Utils {
  clearGallery() {
    document.querySelector('.gallery').innerHTML = '';
  }

  addLoadMore() {
    document.querySelector('.load-more').classList.add('hiden');
  }

  searchSubmitFilter(value) {
    if (value.hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      loadMoreBtn.classList.remove('hiden');
    } else if (value.hits.length > 0) {
      Notify.success(`Hooray! We found ${value.totalHits} images.`);
    }
    searchApiService.restPerPage();
    return value;
  }

  loadMoreFilter(value) {
    searchApiService.incrementPerPage();
    if (value.totalHits <= searchApiService.perPage) {
      Report.info(
        'Search',
        "We're sorry, but you've reached the end of search results.",
        'Okay'
      );
      return document.querySelector('.load-more').classList.remove('hiden');
    }
    return value;
  }

  darkMode() {
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('.search').classList.toggle('dark');
    document.querySelector('.reset').classList.toggle('reset-dark');

    if (document.querySelector('.search').classList.contains('dark')) {
      document.querySelector('.them-l').style.display = 'none';
      document.querySelector('.them-d').style.display = 'block';
      return;
    }
    document.querySelector('.them-d').style.display = 'none';
    document.querySelector('.them-l').style.display = 'block';
  }

  refreshPage() {
    document.querySelector('.load-more').classList.remove('hiden');
    document.querySelector('.gallery').innerHTML = '';
    document.querySelector('.search-form').reset();
  }
}
