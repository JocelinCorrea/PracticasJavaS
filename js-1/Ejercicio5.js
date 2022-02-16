
const precio_saco = parseFloat(1560);

let descuento = prompt("¿Cuál es el descuento que tiene el producto? (Escribe únicamente el número)");

let conversion_descuento = parseFloat(descuento) / 100;

let descuento1= parseFloat(precio_saco) * parseFloat(conversion_descuento);

let precio_final = parseFloat(precio_saco) - parseFloat(descuento1);

alert("El precio final del saco es: $" + precio_final);
