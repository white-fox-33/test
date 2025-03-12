<script>
  import { fade } from "svelte/transition";

  let items = [{ id: 1, name: "Mjölk", bought: false, priority: 1 }];
  let newItem = "";
  let newPriority = 1;

  function addItem() {
    if (newItem.trim()) {
      items = [
        ...items,
        {
          id: Date.now(),
          name: newItem.trim(),
          bought: false,
          priority: Math.max(1, Math.min(10, parseInt(newPriority) || 1)), // Begränsa prioritet till 1–10
        },
      ];
      newItem = "";
      newPriority = 1; // Återställ prioritet
    }
  }

  function toggleBought(itemId) {
    items = items.map((item) =>
      item.id === itemId ? { ...item, bought: !item.bought } : item
    );
  }

  function deleteItem(itemId) {
    items = items.filter((item) => item.id !== itemId);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  // Reaktiv sortering baserat på prioritet (högst prioritet först)
  $: sortedItems = [...items].sort((a, b) => b.priority - a.priority);
</script>

<main class="container">
  <header>
    <h1>Shoppinglist</h1>
  </header>
  <div class="categories_container">
    <section>
      <h2>Varor att köpa</h2>
      <ul>
        {#each sortedItems.filter(item => !item.bought) as item (item.id)}
          <li transition:fade>
            <span>{item.name} (Prioritet: {item.priority})</span>
            <div class="buttons">
              <button class="complete" on:click={() => toggleBought(item.id)}>✔</button>
              <button class="delete" on:click={() => deleteItem(item.id)}>✖</button>
            </div>
          </li>
        {/each}
      </ul>
      <input
        type="text"
        bind:value={newItem}
        placeholder="Lägg till en vara"
        on:keypress={handleKeyPress}
      />
      <input
        type="number"
        bind:value={newPriority}
        min="1"
        max="10"
        placeholder="Prioritet (1–10)"
        on:keypress={handleKeyPress}
      />
      <button on:click={addItem}>Lägg till</button>
    </section>

    <section>
      <h2>Köpta varor</h2>
      <ul>
        {#each sortedItems.filter(item => item.bought) as item (item.id)}
          <li transition:fade>
            <span>{item.name} (Prioritet: {item.priority})</span>
            <div class="buttons">
              <button class="complete" on:click={() => toggleBought(item.id)}>↩</button>
              <button class="delete" on:click={() => deleteItem(item.id)}>✖</button>
            </div>
          </li>
        {/each}
      </ul>
    </section>
  </div>
</main>

<style>
  .container {
    background-color: #f8f9fa;
    width: 60vw;
    height: 80vh;

    min-height: 600px;
    min-width: 900px;

    border-radius: 20px;
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;
    grid-template-columns: 1fr;

    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  header {
    display: grid;
    place-items: center;
    background-color: #343a40;
    color: white;
    border-radius: 10px;
  }

  .categories_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    height: 100%;
    overflow-y: hidden;
  }

  section {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow: hidden;
  }


  section:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.3);
  }

  h2 {
    text-align: center;
    margin: 0 0 1rem 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    overflow-y: scroll;
  }



  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: black;
    border-bottom: 1px solid white; /* Vit linje mellan varor */
  }

  .buttons {
    display: flex;
    gap: 5px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 2px;
  }

  input {
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    color: black;
  }

  button.complete {
    background-color: #28a745; /* Grön för "Klar" */
  }

  button.delete {
    background-color: #dc3545; /* Röd för "Ta bort" */
  }

  button:hover {
    opacity: 0.9;
  }
</style>
