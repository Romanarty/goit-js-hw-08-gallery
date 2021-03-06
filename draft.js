const  cardsMarkup = createCardsMarkup(colors);
listGallery.insertAdjacentHTML(`beforeend`, cardsMarkup);
listGallery.addEventListener('click', cardsMarkup);
console.log(createCardsMarkup(colors));

function createCardsMarkup(colors) {
  return colors.map(({ preview,original,description }) => { 
     return `<li class="gallery__item">
        <a href="#" class="gallery__link">  
        <img
        class="gallery__image"
          src="${galleryItems.preview}"
          data-source="${galleryItems.original}"
          alt="${galleryItems.description}"
          loading="lazy"
        /></a>
      </li>`;
    }).join(``);
};
console.log(createCardsMarkup);
cardsMarkup.append(...color);




const listGallery = document.createElement('ul.js-gallery');
 
 const listItemEl = document.createElement('li');
listItemEl.classList.add('gallery__item');

const itemLinkEl = document.createElement('a');
itemLinkEl.classList.add('gallery__link');
itemLinkEl.innerHtml = '<a href=""></a>';


// listItemEl.appendChild(itemLinkEl);
// itemLinkEl.appendChild(imageEl);
// listGallery.appendChild(listItemEl);
//  console.log(listGallery);
 
// Мойй вар
const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

 
 

// Разметка
 
// const imageEl = document.createElement('img');
// imageEl.classList.add('gallery__image')
// imageEl.src = "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
// imageEl.alt = "${galleryItems.description}";
// imageEl.width = 640;
//  console.log(imageEl)
// document.body.appendChild(imageEl);

 
// const img = [];
// const Item = document.createElement('li');
// const Img = document.createElement('img');
// Item.appendChild(Img)
 
// Item.insertAdjacentHTML('afterbegin', 'img');
// console.log(Item)

 


const makeImageItemtemplate = itemsCard => {
return `<li class=“gallery__item”>
  <a
    class=“gallery__link”
    href=“#”
  >
    <img
      class=“gallery__image”
      src=“${itemsCard.preview}”
      data-source=“${itemsCard.original}”
      alt=“${itemsCard.description}”
    />
  </a>
</li>`;
};

 const listGallery = document.querySelector('.js-gallery');
    const makeImagesItems = galleryItems.map(makeImageItemtemplate).join('');
console.log(makeImagesItems);
  
const cardsMarkup = createCardsMarkup(colors);
listGallery.insertAdjacentHTML('afterbegin', cardsMarkup); 
  
const markup = gallery
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=''>
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/> </a> </li>`,
  )
  .join('');




// const listGallery = document.querySelectorAll(`.js-gallery`);
//   console.log(listGallery);
// const makeImagePallete = itemsCard => {
// return `<li class=“gallery__item”>
//   <a
//     class=“gallery__link”
//     href=“#”
//   >
//     <img
//       class=“gallery__image”
//       src=“${itemsCard.preview}”
//       data-source=“${itemsCard.original}”
//       alt=“${itemsCard.description}”
//     />
//   </a>
// </li>`;
// };
//   const makeImagesItems = galleryItems.map(makeImagePallete).join('');
//   console.log(makeImagesItems);
//   listGallery.insertAdjacentHTML('afterbegin', makeImagesItems);



// Модальное окно
const refs = {
  openModalBtn: document.querySelector(`[data-action="open-lightbox"]`),
  closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
  backdrop: document.querySelector('js.backdrop'),
};

refs.openModalBtn = addEventListener('click', OnOpenModal);
refs.closeModalBtn = addEventListener('click', onCloseModal);
 refs.backdrop = addEventListener('click',onBackdropClick )

function OnOpenModal() { document.body.classList.add('show-modal'); }
function onCloseModal() { document.body.classList.remove('show-modal');}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log('Закрыли галерею');
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if(isEscKey){onCloseModal()}
}



















