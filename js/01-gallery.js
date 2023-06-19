import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEL = document.querySelector(".gallery");

galleryEL.innerHTML = createGalleryItemsMarkup(galleryItems);

galleryEL.addEventListener("click", onGalleryItemClick);

function createGalleryItemsMarkup(galleryArr) {
  return galleryArr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${preview}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  
  `
    )
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280">`,
    {
      onShow: () => window.addEventListener("keydown", onEscPress),
      onClose: () => window.removeEventListener("keydown", onEscPress),
    }
  );

  modal.show();

  function onEscPress(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}

console.log(galleryItems);
