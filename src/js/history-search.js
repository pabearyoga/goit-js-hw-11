export default class HistorySearchApi {
  showHistorySearch() {
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

  renderHistorySearch(event) {
    event.preventDefault();
    const a = document.querySelector('[name="searchQuery"]').value;
    const markup = `<div class="history-search__aaa">${a}</div>`;
    document
      .querySelector('.history-search')
      .insertAdjacentHTML('beforeend', markup);
  }

  onHistorySearchItemClick(event) {
    if (event.target.classList.contains('history-search__title')) {
      return;
    }
    document.querySelector('.search-btn').textContent = 'Search';
    document.querySelector('[name="searchQuery"').value =
      event.target.textContent;

    setTimeout(() => {
      document.querySelector('.search-btn').click();
    }, 100);
  }
}
