<script>
    let image = "https://picsum.photos/id/70/367/267";
    let photo = "https://picsum.photos/id/88/367/267";
    let picture = "https://picsum.photos/id/93/367/267";
    let test ="https://picsum.photos/id/26/4209/2769";
    let test2 ="https://picsum.photos/id/45/4592/2576"
  </script>
  
<h1>PhotoApp</h1>

  <div class="photos">
    <div class="image-wrapper">
      <img src={image} alt="Bild 1">
    </div>
    <div class="image-wrapper">
      <img src={photo} alt="Bild 2">
    </div>
    <div class="image-wrapper">
      <img src={picture} alt="Bild 3">
    </div>
    <div class="image-wrapper">
        <img src={test} alt="Bild 4">
      </div>
      <div class="image-wrapper">
        <img src={test2} alt="Bild 4">
      </div>
  </div>
  
<style>
    h1 {
      text-align: center;
      font-size: 50px;
      margin: 20px;
      color: #568451;
    }
  
    .photos {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-wrap: wrap; 
      background-color: #013220; 
      border-radius: 20px; 
      padding: 20px; 
    }
  
    .image-wrapper {
      flex-grow: 1;
      flex-basis: 300px;
      margin: 10px;
    }
  
    .image-wrapper img {
      width: 100%;
      border-radius: 20px; 
      border: 2px solid white; 
      box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.2); 
    }
  
    .image-wrapper:hover {
      flex-grow: 2; 
    }
  
    .image-wrapper:active {
      transform: scale(0.9); 
    }
  </style>