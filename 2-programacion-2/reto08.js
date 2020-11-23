const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const listElement = document.querySelector('.list');

const content = `<li><h1>${firstDogName}</h1><img src="${firstDogImage}" alt=""></li><li><h1>${secondDogName}</h1><img src="${secondDogImage}" alt=""></li><li><h1>${thirdDogName}</h1><img src="${thirdDogImage}" alt=""></li>`;

listElement.innerHTML = content;