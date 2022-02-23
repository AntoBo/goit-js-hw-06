const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

function makeMarkUp(url, alt) {
  return `<li class='item'><img src=${url} alt=${alt} width=200></li>`;
}

let markup = '';
for (const img of images) {
  markup += makeMarkUp(img.url, img.alt);
}

galleryEl.insertAdjacentHTML('afterbegin', markup);

//CSS styles
galleryEl.style.display = 'flex';
galleryEl.style.listStyle = 'none';
const galleryItemEl = document.querySelectorAll('.gallery li:not(:first-child)');
galleryItemEl.forEach(el => {
  el.style.marginLeft = '10px';
});
