<script>
  import Button from "./components/Button.svelte";
  import Card from "./components/Card.svelte";
  export let name;
  let imgSrc = "assets/grafana.png";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  #contentContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-family: "Helmet";
    text-transform: uppercase;
    font-size: 5em;
    font-weight: 100;
  }

  img {
    width: 240px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Selamat Datang di {name}!</h1>
  <div id="contentContainer">
    <Card />
  </div>
</main>
