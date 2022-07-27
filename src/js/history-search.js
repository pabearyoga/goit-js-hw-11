export default class HistorySearchApi {
  renderHistorySearch() {
    const a = document.querySelector('[name="searchQuery"]').value;
    const markup = `<div class="history-search__aaa">${a}</div>`;
    document
      .querySelector('.history-search')
      .insertAdjacentHTML('beforeend', markup);
  }

  onHistorySearchItemClick(event) {}
}
