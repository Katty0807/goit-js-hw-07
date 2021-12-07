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

galleryDivEl.addEventListener("click", onSelectImage);

function onKeyDown(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}

const instance = basicLightbox.create(
  `<img class='modal-img' width="800" height="600">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onKeyDown);
      console.log("onShow");
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onKeyDown);
      console.log("onClose");
    },
  }
);

function onSelectImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const imgUrl = evt.target.dataset.source;
  instance.element().querySelector(".modal-img").src = imgUrl;
  instance.show();
}
