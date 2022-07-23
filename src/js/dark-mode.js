export default function darkMode() {
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
