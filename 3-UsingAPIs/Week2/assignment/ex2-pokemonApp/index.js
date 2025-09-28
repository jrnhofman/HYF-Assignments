/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  });
}

async function fetchAndPopulatePokemons(select) {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemons = data.results;
    while (select.firstChild) {
      select.remove(select.firstChild);
    }
    pokemons.forEach((pokemon) => {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      select.appendChild(option);
    });
    return pokemons;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

async function fetchImage(imgElem, pokemon) {
  try {
    const data = await fetchData(pokemon.url);
    imgElem.src = data.sprites.front_default;
    imgElem.style.display = 'block';
  } catch (error) {
    console.error(error);
  }
}

function main() {
  try {
    const buttonElem = document.createElement('button');
    buttonElem.type = 'button';
    buttonElem.textContent = 'Get Pokemon';
    buttonElem.style.display = 'block';
    document.body.appendChild(buttonElem);

    const selectElem = document.createElement('select');
    document.body.appendChild(selectElem);

    const imgElem = document.createElement('img');
    imgElem.style.display = 'none';
    imgElem.alt = 'Pokemon image';
    imgElem.src = 'placeholder';

    document.body.appendChild(imgElem);
    let pokemons = [];

    buttonElem.addEventListener('click', async () => {
      pokemons = await fetchAndPopulatePokemons(selectElem);
    });

    selectElem.addEventListener('change', () => {
      const pokemon = pokemons[selectElem.selectedIndex];
      fetchImage(imgElem, pokemon);
    });
  } catch (error) {
    console.error(error.message);
  }
}

window.addEventListener('load', main);
