import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryBox = document.querySelector('.gallery');

const markUp = galleryItems.map(item =>
    `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}" style ="cursor: default">
                <img class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`)
    .join("");

galleryBox.insertAdjacentHTML('beforeend', markUp);

galleryBox.addEventListener('click', onClick);

let instance

function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)

    instance.show()
}

document.addEventListener("keydown", event => {

    if (!instance && !instance.visible()) return false;

    if (event.code === "Escape") {
        instance.close()
    }
});
