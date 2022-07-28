export default function darkMode() {
  document.querySelector('body').classList.toggle('dark');
  document.querySelector('.search').classList.toggle('dark');
  document.querySelector('[name="searchQuery"]').classList.toggle('input-d');
  document.querySelector('.search-form').classList.toggle('input-d');
  document.querySelector('.them-d').classList.toggle('dark-h');
  document.querySelector('.home').classList.toggle('dark-h');
  document.querySelector('.history-btn').classList.toggle('dark-h');
  document.querySelector('.history-search').style.backgroundColor = '#fff';

  if (document.querySelector('.search').classList.contains('dark')) {
    document.querySelector('.them-l').style.display = 'none';
    document.querySelector('.them-d').style.display = 'block';
    document.querySelector('.history-search').style.backgroundColor = '#303134';

    return;
  }
  document.querySelector('.them-d').style.display = 'none';
  document.querySelector('.them-l').style.display = 'block';
}
