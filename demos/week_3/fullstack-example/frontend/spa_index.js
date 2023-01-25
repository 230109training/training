let submitButton = document.querySelector("#submit_button");

submitButton.addEventListener("click", loginFunction);

async function loginFunction() {
  let usernameInput = document.querySelector("#username_input");
  let passwordInput = document.querySelector("#password_input");

  let username = usernameInput.value;
  let password = passwordInput.value;

  try {
    const url = "http://localhost:3000/login";
    const params = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };
    let response = await fetch(url, params);
    let data = await response.json();  
    generateHomepage(data);
  } catch (err) {
    alert(err);
  }
}

// generate the logged in page
function generateHomepage(data){
    // header
    // some paragraphs
    // maybe an image?
    
    let header = document.createElement("h1");
    header.innerText = "Homepage!";

    let header2 = document.createElement("h3");
    header2.innerText = data.message;

    let paragraph = document.createElement("p");
    paragraph.innerText = "welcome user back to your homepage!"

    document.body.innerHTML = "";

    document.body.appendChild(header);
    document.body.appendChild(header2);
    document.body.appendChild(paragraph);
    
    generatePokeSearch();
}

function generatePokeSearch(){
    let searchDiv = document.createElement("div");
    let inputSearch = document.createElement("input");
    let header = document.createElement("h2");
    let searchButton = document.createElement("button");

    header.innerText = "Poke Search";
    searchDiv.setAttribute("id", "poke-search-div")
    inputSearch.setAttribute("type", "number");
    inputSearch.setAttribute("id", "poke-search-input")

    searchButton.innerText = "Search";

    searchButton.addEventListener("click", asyncPokeRequest);

    searchDiv.appendChild(header);
    searchDiv.appendChild(inputSearch);
    searchDiv.appendChild(searchButton);

    document.body.appendChild(searchDiv);
}

async function asyncPokeRequest(){
    let pokeSearchInput = document.querySelector("#poke-search-input").value;

    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearchInput}`;
        // fetch for get requests do not need params for setting the method as it is by default GET
        let response = await fetch(url);
        let data = await response.json();
        generatePokeData(data);
    }catch(err){
        console.error(err);
    }

}

function generatePokeData(data){
    let pokeDataCheck = document.querySelector("#poke-data-container");

    console.log(pokeDataCheck);
    if(pokeDataCheck){
        pokeDataCheck.innerHTML = "";
        let header = document.createElement("h4");
        header.innerText = data.name;

        let pokeImage = document.createElement("img");
        pokeImage.setAttribute("src", data.sprites.front_shiny);

        pokeDataCheck.appendChild(header);
        pokeDataCheck.appendChild(pokeImage);
        document.querySelector("#poke-search-div").appendChild(pokeDataCheck);
    }else{
        let pokeDataDiv = document.createElement("div");
        pokeDataDiv.setAttribute("id", "poke-data-container");

        let header = document.createElement("h4");
        header.innerText = data.name;

        let pokeImage = document.createElement("img");
        pokeImage.setAttribute("src", data.sprites.front_shiny);

        pokeDataDiv.appendChild(header);
        pokeDataDiv.appendChild(pokeImage);
        document.querySelector("#poke-search-div").appendChild(pokeDataDiv);
    }


}