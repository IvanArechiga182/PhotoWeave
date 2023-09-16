'use strict'

var frases = ['Diviértete hoy con lo nuevo de nuestra galería.',
 'Ilustra tu día y llena de inspiración tu mente con estas obras.',
 "El arte es la expresión suprema del alma humana.",
 "El arte es la búsqueda de la belleza en todas sus formas.",
 "Sumérgete en el mundo del color y la forma.",
 "Cada visita a una galería es un nuevo descubrimiento."];
function fraseRandom(){
    var indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}

var elementoFrase = document.getElementById("fraseAleatoria");
elementoFrase.textContent = fraseRandom();