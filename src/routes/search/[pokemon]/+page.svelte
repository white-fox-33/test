<script>
  export let data;
  import {onMount} from 'svelte';

  onMount(()=>{
    let searches = JSON.parse(sessionStorage.getItem('recentSearches')) || [];
    if (data.response){
      let search = data.response
      let state = true
      for (let i = 0; i < searches.length;i++){
        if (searches[i].name == search.name){
          state = false
        }
      }
      if (state) {
            searches = [search, ...searches].slice(0, 5);
            sessionStorage.setItem('recentSearches', JSON.stringify(searches));
        }
    }
  })
</script>

{#await data}
  <p>.. väntar</p>
{:then pokemon}
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] === "string"}
        <img src={sprites[1]} alt="Pokémon sprite" />
      {/if}
    {/each}
  </article>
  <h1>{pokemon.response.name}</h1>
  <section>
    <p>Höjd: {pokemon.response.height}</p>
    <p>Vikt: {pokemon.response.weight}</p>
    <p>Basupplevelse: {pokemon.response.base_experience}</p>
  </section>
{/await}

<style>
  article {
    width: 90%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 100px;
    max-width: 100px;
    border: 1px solid black;
    border-radius: 8px;
  }

  h1{
    color:black;
  }

  p{
    color:black;
  }
</style>
