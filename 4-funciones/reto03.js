const iva = 0.21;

function price(x) {    
    return (x);
}

const realPrice = price(1000);

console.log(`Precio sin IVA: ${realPrice}, IVA: ${realPrice * iva} y Total: ${realPrice + (realPrice * iva)}`);