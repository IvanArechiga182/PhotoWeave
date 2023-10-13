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

/*var elementoFrase = document.getElementById("fraseAleatoria");
elementoFrase.textContent = fraseRandom();

function createPaintingsArray() {
  // Crea un nuevo array de pinturas.
  const paintings = [];

  // Agrega las pinturas al array.
  paintings.push({
    title: "La noche estrellada",
    artist: "Vincent van Gogh",
    country: "Paises Bajos",
    year: 1889,
    image: "imgs/noche_estrellada.jpg"
  });

  paintings.push({
    title: "El grito",
    artist: "Edvard Munch",
    country: "Noruega",
    year: 1893,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Edvard_Munch%2C_The_Scream%2C_1893.jpg/1200px-Edvard_Munch%2C_The_Scream%2C_1893.jpg"
  });

  return paintings;
}

function filterPaintingsByCountry(paintings, country) {
  // Crea un nuevo array de pinturas que solo contenga las pinturas del país especificado.
  const filteredPaintings = filterPaintingsByCountry(paintings, "Paises Bajos");


  // Itera sobre el array de pinturas original.
  for (const painting of paintings) {
    // Comprueba si la pintura es del país especificado.
    if (painting.country === country) {
      // Agrega la pintura al nuevo array de pinturas filtradas.
      filteredPaintings.push(painting);
    }
  }

  // Devuelve el nuevo array de pinturas filtradas.
  return filteredPaintings;
}

function showPaintingsGrid(paintings) {
  // Crea un elemento `div` para la cuadrícula.
  const grid = document.createElement('div');
  grid.classList.add('row');

  // Itera sobre el array de pinturas filtradas.
  for (const painting of paintings) {
    // Crea un elemento `div` para cada pintura.
    const paintingCard = document.createElement('div');
    paintingCard.classList.add('col');

    // Agrega la imagen de la pintura al elemento `div`.
    const paintingImage = document.createElement('img');
    paintingImage.src = painting.image;
    paintingCard.appendChild(paintingImage);

    // Agrega el elemento `div` de la pintura a la cuadrícula.
    grid.appendChild(paintingCard);
  }

  // Agrega la cuadrícula al DOM.
  document.querySelector('main').appendChild(grid);
}

showPaintingsGrid(filteredPaintings);*/
