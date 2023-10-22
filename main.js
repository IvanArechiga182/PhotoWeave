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

//Se modificó esta función

function showPaintingsGrid(paintings) {
  // Crea un elemento `div` para la cuadrícula.
  const grid = document.createElement('div');
  grid.classList.add('row');

  // Obtén el término de búsqueda del input de búsqueda.
  const searchTerm = document.getElementById('buscador').value.toLowerCase();

  // Itera sobre el array de pinturas.
  for (const painting of paintings) {
    // Comprueba si el título de la pintura contiene el término de búsqueda.
    if (painting.title.toLowerCase().includes(searchTerm)) {
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
  }

  // Obtiene el elemento principal donde se mostrará la cuadrícula.
  const mainElement = document.querySelector('main');
  
  // Limpia el contenido principal antes de agregar la cuadrícula actualizada.
  mainElement.innerHTML = '';

  // Agrega la cuadrícula al DOM.
  mainElement.appendChild(grid);
}


// Se eliminó la llamada a `showPaintingsGrid(filteredPaintings)` ya que se llamará en función de la búsqueda.


/* EL siguiente codigo es lo que se supone que funcionaba pero dejo de funcionar para la busqueda
de las tarjetas que coincidian con el busqueda (es decir el titulo de la pintura) */

//También se modificó este último fragmento 

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('buscador');
  const searchButton = document.getElementById('boton-buscar');
  const cards = document.querySelectorAll('.card');

  // Variable para rastrear el estado de la búsqueda
  let isSearching = false;

  searchButton.addEventListener('click', function() {
    // Verifica si una búsqueda ya está en curso y evita hacer una nueva búsqueda.
    if (isSearching) {
      return;
    }

    // Marca que la búsqueda está en curso.
    isSearching = true;

    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(function(card) {
      const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
      if (cardTitle.includes(searchTerm)) {
        card.style.display = 'block';
        card.classList.add('search-result-card'); // Agregar clase para alinear
      } else {
        card.style.display = 'none';
        card.classList.remove('search-result-card'); // Eliminar clase si no coincide
      }
    });

    // Restaurar estilos al borrar la búsqueda
    if (searchTerm === '') {
      cards.forEach(function(card) {
        card.style.display = 'block';
        card.classList.remove('search-result-card');
      });
    }

    // Marca que la búsqueda ha terminado.
    isSearching = false;
  });
});




