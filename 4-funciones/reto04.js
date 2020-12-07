let borderBox = false;
let width = 600;
let padding = 15;
let border = 5;

function calculate(borderBox, width, padding, border) {
    let acum = 0;
    if (borderBox === true) {
        acum = width + padding + border;               
    }else {
        acum = width;
    }
    return acum;        
}

if (borderBox === true) {
    console.log("El ancho de la caja es " + calculate(borderBox, width, padding, border));
}else {
    console.log("El ancho del contenido es " + calculate(borderBox, width, padding, border));
}

    