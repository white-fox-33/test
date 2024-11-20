<script>
    import { users_store } from "$lib/user";
    import { onMount } from "svelte";
    import { base } from '$app/paths';
  
    let username = "";
    let password = "";
    let users = [];
  
    // Ladda användare från localStorage när sidan laddas
    onMount(() => {
      if ($users_store.length > 2) {
        users = JSON.parse($users_store);
      }
    });
  
    function handleLogin() {
      const matchingUser = users.find(
        (user) => user.username === username && user.password === password
      );
  
      if (matchingUser) {
        alert(`Välkommen tillbaka, ${username}!`);
      } else {
        alert("Fel användarnamn eller lösenord.");
      }
    }
  </script>
  
  <main>
    <div class="container">
      <h1>Logga in</h1>
      <form on:submit|preventDefault={handleLogin}>
        <label for="username">Användarnamn:</label>
        <input type="text" id="username" bind:value={username} required />
  
        <label for="password">Lösenord:</label>
        <input type="password" id="password" bind:value={password} required />
  
        <input type="submit" value="Logga in" />

        <ref>
          <a href="{base}/register" title="Skappa nytt användare">Regestrera sig</a>
        </ref>
      </form>
    </div>
  </main>
  
  <style>
    main {
      background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
      background-size: cover;
      width: 100%;
      height: 100vh;
      padding: 5%;
      min-height: 600px;
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
  
    input {
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