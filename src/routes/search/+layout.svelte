<script>
    import {goto} from '$app/navigation';
</script>
  
  <div class="backdrop"></div>
<main>
  <button on:click={()=>{goto(`/search`);}}>⌂</button>
  <section>
    <slot />
  </section>
</main>

  <style>
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: url('https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960') no-repeat center center / cover;
      filter: blur(5px);
      z-index: -1;
    }
  
    main{
      width: 80vw;
      height: 100vh;
      background: rgba(255, 255, 255, 0.8);
      margin: 5vh auto;
      border-radius: 12px;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button{
      color:black;
      margin-top: 5px;
      margin-left: 20px;
      scale:3;
    }
  </style>
  