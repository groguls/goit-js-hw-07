import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEL = document.querySelector(".gallery");

galleryEL.innerHTML = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryArr) {
  return galleryArr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>

  `
    )
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
