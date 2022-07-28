export default class HistorySearchApi {
  renderHistorySearch() {
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
    document.querySelector('[name="searchQuery"').value =
      event.target.textContent;

    setTimeout(() => {
      document.querySelector('.search-btn').click();
    }, 100);
  }
}
