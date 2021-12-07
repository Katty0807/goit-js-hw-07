import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryDivEl = document.querySelector(".gallery");
const cardsMarkup = createCardsMarkup(galleryItems);
console.log(galleryDivEl);

galleryDivEl.insertAdjacentHTML("beforeend", cardsMarkup);

function createCardsMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <li>
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
    </div>    
    `;
    })
    .join("");
}

  let gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });