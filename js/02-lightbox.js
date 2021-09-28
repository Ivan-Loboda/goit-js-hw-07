import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

const markUp = galleryItems.map(item =>
    `<li>
    <a class="gallery__link" href="${item.original}" style ="cursor: default">
                <img class="gallery__image"
                    src="${item.preview}"
                    alt="${item.description}"
                />
            </a>
    </li>`).join("");


galleryBox.insertAdjacentHTML('beforeend', markUp);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
