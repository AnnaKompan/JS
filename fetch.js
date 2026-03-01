// fetch - function used to make HTTP requests to fetch data from server
// fetch returns a promise that resolves the response of the request
// fetch(url, {options:GET, PUT, POST, DELETE}) ->
// url is the endpoint to which the request is sent
// options is an object that contains various settings for the request such as method, headers, body, etc.

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Couldnt catch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((err) => console.log(err));

// Using ASYNC/AWAIT
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    );
    if (!response.ok) {
      throw new Error("COULDNT FETCH RESOURCE");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (err) {
    console.log(err);
  }
}

fetchData();
