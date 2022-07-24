import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.photo-card a', {
  captionsData: 'alt',
  captionDelay: 250,
});
export default function renderGallery(images) {
  const markup = images.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
                    <a class="gallery__item" href="${largeImageURL}">
                        <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
                    </a>
                    <div class="info">
                        <p class="info-item">
                            <b>Likes<br><span class="info-item-value">${likes}</span></b>
                        </p>
                        <p class="info-item">
                            <b>Views<br><span class="info-item-value">${views}</span></b>
                        </p>
                        <p class="info-item">
                            <b>Comments<br><span class="info-item-value">${comments}</span></b>
                        </p>
                        <p class="info-item">
                            <b>Downloads<br><span class="info-item-value">${downloads}</span></b>
                        </p>
                    </div>
                </div>`;
      }
    )
    .join('');

  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
