import Random from './random';
const random = new Random();

export default function homePage() {
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
  if (
    !document
      .querySelector('.history-search-wrapper')
      .classList.contains('hide')
  ) {
    document.querySelector('.history-btn').click();
  }
}
