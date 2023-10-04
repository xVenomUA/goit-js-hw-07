import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, description, original }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
list.insertAdjacentHTML("beforeend", markup.join(""));
list.addEventListener("click", onClick);


function onClick(evt) {
  evt.preventDefault();
  const { target } = evt;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  const imgalt = target.alt; // querySelector('.gallery__image').alt;
  const curruntItems = galleryItems.find(
    ({ description }) => description === imgalt
  );
  
  const instance = basicLightbox.create(`
    <img class="img-photo" src="${curruntItems.original}" alt="${curruntItems.description}" width="1280" height="600" >
`);
  
  instance.show();
  function onKeydown(evt) {
    if (evt.key === "Escape" || evt.key === " " || evt.key === "Shift") {
      instance.close();
    }
  }
  if(instance.visible()) {
    window.addEventListener("keydown", onKeydown);
  }
}