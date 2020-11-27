const userName = 'Nicolás Arbeláez';
const nameElement = document.querySelector('.name');
const boxElement = document.querySelector('.box');

nameElement.innerHTML = userName;
const urlAvatar = 'http://placehold.it/300x300';
var string ='http://www.fillmurray.com/300/300'

document.querySelector('.box').innerHTML = `<img src="${string||urlAvatar}" alt="avatar de usuario"/>`;
