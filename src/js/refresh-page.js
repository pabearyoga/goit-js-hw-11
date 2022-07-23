import removeLoadMore from '.';

export default function refreshPage() {
  removeLoadMore();
  document.querySelector('.gallery').innerHTML = '';
  document.querySelector('.search-form').reset();
}
