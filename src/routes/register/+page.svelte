<script>
    import { users_store } from '$lib/user';
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import {goto} from '$app/navigation';
  
    let name = "";
    let email = "";
    let password = "";
    let color = "blue";
    let users = [];
  
    // Ladda användare från localStorage när sidan laddas
    onMount(() => {
      if ($users_store.length > 2) {
        users = JSON.parse($users_store);
      }
    });
  
    function handleSubmit() {
      // Kontrollera om användarnamn redan finns
      const existingUser = users.filter((user) => user.username === name);
  
      if (existingUser.length > 0) {
        alert("Användarnamnet är redan taget!");
        return;
      }
  
      // Skapa ny användare
      let new_user = { username: name, password, email, color };
      users = [...users, new_user];
      $users_store = JSON.stringify(users);
  
      alert(`Registrering lyckades, ${name}!`);

      goto(`${base}/login`);
    }
  </script>
  
  <main>
    <div class="container">
      <h1>Registrering</h1>
      <form on:submit|preventDefault={handleSubmit}>
        <div
          style="width: 100px; height: 100px; border-radius: 50%; 
          overflow: hidden; background-color: {color}; margin: auto;">
        </div>
  
        <label for="name">Namn:</label>
        <input type="text" id="name" bind:value={name} required />
  
        <label for="email">E-post:</label>
        <input type="email" id="email" bind:value={email} required />
  
        <label for="password">Lösenord:</label>
        <input type="password" id="password" bind:value={password} required />
  
        <label for="color">Favoritfärg:</label>
        <select id="color" bind:value={color}>
          <option value="blue">Blå</option>
          <option value="red">Röd</option>
          <option value="green">Grön</option>
          <option value="yellow">Gul</option>
          <option value="purple">Lila</option>
          <option value="black">Svart</option>
          <option value="white">Vit</option>
        </select>
  
        <input type="submit" value="Registrera" />
        <a href="{base}/login" title="Logga in">Logga in</a>
      </form>
    </div>
  </main>

  <style>
    main {
      background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
      background-size: cover;
      width: 100vw;
      height: 100vh;
      padding: 5%;
      min-height: 630px;
    }
  
    .container {
      border: solid 5px rosybrown;
      border-radius: 10px;
      width: 35%;
      min-width: 300px;
      height: auto;

      background-color: #3a2e3b;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding: 20px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      color: white;
    }
  
    label {
      margin-top: 10px;
      font-size: 1rem;
      text-align: left;
      width: 100%;
    }
  
    input, select {
      margin-bottom: 10px;
      padding: 5px;
      font-size: 1rem;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: black
    }

    input[type="submit"] {
      background-color: rosybrown;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    input[type="submit"]:hover {
      background-color: #562c3b;
    }

  </style>
  