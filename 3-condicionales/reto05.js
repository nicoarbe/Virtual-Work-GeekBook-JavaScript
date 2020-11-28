const rainbowSection = document.querySelector('.rainbow');
const titleElement = document.querySelector('.title');
const textElement = document.querySelector('.text');


if (rainbowSection.classList.contains('warning')) {
    `${document.querySelector('.title').innerHTML = `AVISO`}` && `${document.querySelector('.text').innerHTML = `Tenga cuidado`}`;
} else if (rainbowSection.classList.contains('error')) {
    `${document.querySelector('.title').innerHTML = `ERROR`}` && `${document.querySelector('.text').innerHTML = `Ha surgido un error`}`;
} else if (rainbowSection.classList.contains('success')) {
    `${document.querySelector('.title').innerHTML = `CORRECTO`}` && `${document.querySelector('.text').innerHTML = `Los datos son correctos`}`;
} 