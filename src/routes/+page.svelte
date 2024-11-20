<script>
    var name = "Oleksandr Lenskyi"
  </script>
  
  <main>
    <div>
      <h1 class="name">{name}</h1>
      <h2>
        Här har jag samlat mina uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!
      </h2>
      <h3>Inspirerande citat för min webbutvecklingsresa:</h3>
  
      <!-- Inspirerande citat -->
      <p id="inspo">
        "The only way to learn a new programming language is by writing programs in it." - 
        <strong>Dennis Ritchie</strong>, creator of the C programming language.
      </p>
      <p style="background-color:pink;">
        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - 
        <span>Patrick McKenzie, software engineer and entrepreneur</span>.
      </p>
    </div>
  

    <div class = "picture">
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)" />
        </svg>
    </div>

  </main>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#0099ff" fill-opacity="1" d="M0,224L30,192C60,160,120,96,180,90.7C240,85,300,139,360,149.3C420,160,480,128,540,144C600,160,660,224,720,234.7C780,245,840,203,900,192C960,181,1020,203,1080,181.3C1140,160,1200,96,1260,74.7C1320,53,1380,75,1410,85.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>

  
  <style>
    main {
      margin: auto;
      width: 80vw;
      height: 70vh;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      overflow: hidden;
    }
    
    .picture {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    h1 {
      color: grey;
    }
  
    h2 {
      color: rgb(255, 165, 0);
    }
  
    h3 {
      color: #3cb371;
      font-family: sans-serif;
      font-weight: bold;
    }
  
    .name {
      font-family: 'Gill Sans', sans-serif;
      font-size: 50px;
    }
  
    #inspo {
      font-family: Courier, monospace;
      font-size: 160%;
    }
  
    span {
      color: green;
    }
  
    h1,h2,h3,p {
      margin: 10px;
    }
  </style>
  