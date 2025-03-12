<script>
  let cards = Array.from({ length: 6 }, (_, i) => [
    { image: `/memory/images/card${i}.png`, index: i, flipped: false, matched: false },
    { image: `/memory/images/card${i}.png`, index: i, flipped: false, matched: false }
  ]).flat();

  // Slumpa ordningen på korten
  cards = cards.sort(() => Math.random() - 0.5);

  let bluePoints = 0;
  let redPoints = 0;
  let blueTurn = true; // För att hålla reda på vilken spelare som spelar
  let flippedCards = []; // För att hålla reda på de vända korten
  let flipCount = 0;
  let gameOver = false; // För att hantera när spelet är över
  let winner = ''; // För att visa vinnaren

  function flipCard(index) {
    if (cards[index].flipped || cards[index].matched || flipCount >= 2 || gameOver) return;

    // Vänd kortet och lägg till det i flippedCards
    cards = cards.map((card, i) => (i === index ? { ...card, flipped: true } : card));
    flippedCards.push(index);
    flipCount++;

    // Om två kort är vända, kolla om de matchar
    if (flipCount === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.index === secondCard.index) {
        cards[firstIndex].matched = true;
        cards[secondIndex].matched = true;

       
        if (blueTurn) {
          bluePoints++;
        } else {
          redPoints++;
        }
      } else {

        setTimeout(() => {
          blueTurn = !blueTurn;
        }, 1000);
      }

      setTimeout(() => {
        cards.forEach((card) => {
          card.flipped = card.matched;
        });
        flipCount = 0;
        flippedCards = [];
        checkGameOver();
        cards=cards;
      }, 1000);
    }
  }

  function checkGameOver() {
    if (cards.every((card) => card.matched)) {
      gameOver = true;
      if (bluePoints > redPoints) {
        winner = 'Blue won!';
      } else if (redPoints > bluePoints) {
        winner = 'Red won!';
      } else {
        winner = 'Draw!';
      }
    }
  }

  function resetGame() {
    bluePoints = 0;
    redPoints = 0;
    blueTurn = true;
    flippedCards = [];
    flipCount = 0;
    gameOver = false;
    winner = '';
    cards = Array.from({ length: 6 }, (_, i) => [
      { image: `/memory/images/card${i}.png`, index: i, flipped: false, matched: false },
      { image: `/memory/images/card${i}.png`, index: i, flipped: false, matched: false }
    ]).flat().sort(() => Math.random() - 0.5);
  }
</script>

<h1>Memory</h1>

<main>
  {#each cards as card, i}
    <div 
      class="card {card.flipped ? 'flipped' : ''}" 
      on:click={() => flipCard(i)}>
      <img src={card.image} alt="Card front" class="front" />
      <div class="back"></div>
    </div>
  {/each}
</main>

{#if gameOver}
  <div style="text-align: center; margin-top: 20px;">
    <h2>{winner}</h2>
    <button on:click={resetGame}>Play Again</button>
  </div>
{/if}

<aside class="blue">
  <p>{bluePoints}</p>
</aside>

<aside>
  <p>{redPoints}</p>
</aside>

<aside class="turn" class:blue={blueTurn}></aside>
  
<style>
    h1 {
      text-align: center;
      margin-top: 20px;
    }
  
    main {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(4, 100px);
      gap: 10px;
      justify-content: center;
      margin: 20px auto;
    }
  
    .card {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      position: relative;
      cursor: pointer;
      transform: perspective(1000px);
    }
  
    .card img {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      transition: transform 0.3s ease;
    }
  
    .front {
      transform: rotateY(180deg);
    }
  
    .back {
      background-image: url("https://via.placeholder.com/100");
      background-size: cover;
    }
  
    .card.flipped .front {
      transform: rotateY(0);
    }
  
    .card.flipped .back {
      transform: rotateY(180deg);
    }
  
    aside {
      width: 100px;
      height: 100px;
      position: fixed;
      bottom: 10px;
      right: 10px;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    aside.blue {
      background-color: blue;
      left: 10px;
    }
  
    aside.turn {
      box-shadow: 0 0 10px 10px yellowgreen;
      z-index: -1;
    }
  
    p {
      font-size: 30px;
      color: white;
    }
</style>
  