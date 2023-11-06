// Fetch Pokemon Data
async function data(){
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    await fetch(apiUrl)
    .then( pokemon => { const pokemonList = response.results;
        console.log(pokemon);
        const container = document.getElementById('detail');
        console.log(pokemonList);
        pokemonList.forEach(function(pokemon) {
            const pokemonUrl = pokemon.url;
 
            const pokemonCard =`
                <div class="col-md-4">
                    <div class="pokemon-card">
                        <h3>${pokemon.name}</h3>
                        <p
                    </div>
                </div>
            `;
            container.appendChild(pokemonCard);
            
        });
    }
        
       
    );
    
};