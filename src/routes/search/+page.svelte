<script>
    import {goto} from '$app/navigation';
    import { onMount } from 'svelte';
    

    let search = '';
    let activefocus = true;

    $: search = search.toLowerCase();
    let searches   =[]
    onMount(()=> {
        searches = JSON.parse(sessionStorage.getItem('recentSearches')) || [];
    })  

    function Search() {
        goto(`/search/${search}`);
    }
        
</script>

<div id="search-placeholder">
    <button id="search" on:click={Search}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2.75a7.25 7.25 0 015.63 11.82l4.9 4.9a.75.75 0 01-.98 1.13l-.08-.07-4.9-4.9A7.25 7.25 0 1110 2.75zm0 1.5a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5z"></path>
        </svg>
    </button>
    <form on:submit|preventDefault={Search}>
        <input
            type="text"
            placeholder="Sök upp en Pokémon"
            bind:value={search}
            on:focus={() => {
                activefocus = true;
            }}
            oninput="this.value = this.value.replace(/[^a-zA-Z0-9]/g, '')"
        />
    </form>
</div>
<h1>
    Senaste sökningar
</h1>
    

    

<footer>
    {#each searches  as recent}
        <a href={`/search/${recent.name}`}>{recent.name}</a>
    {/each}
    <button on:click={() =>{ sessionStorage.clear(); location.reload()}}>Rensa sökhistorik</button>
</footer>
<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        flex-grow: 1;
    }

    input {
        width: 100%;
        flex-grow: 1;
        color: black;
        padding: 0.5em;
        font-size: 1.2em;
        outline: none;
        border: none;
    }

    input:focus {
        border-color: white;
        box-shadow: 0 0 0px white;
    }

    #search {
        background-color: white;
        width: 40px;
        height: 40px;
        margin-left: 10px;
        flex-shrink: 0;
    }

    #search-placeholder {
        margin-top: 5vh;
        background-color: white;
        border: 2px solid #ddd;
        width: 40vw;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 20px;
        padding: 0 10px;
    }

    #search-placeholder:focus-within {
        border-color: #ffcc00;
        box-shadow: 0 0 5px #ffcc00;
    }

    footer {
        margin-top: 10px;
        width: 50%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding: 0.5em;
    }

    a {
        text-decoration: none;
        padding: 0.5em;
        transition: transform 0.2s, background 0.2s;
        color: black;
    }

    a:hover {
        background: #ffcc00;
        transform: scale(1.05);
    }

    h1 {
        color: black;
    }

    button {
        color: black;
    }
</style>
