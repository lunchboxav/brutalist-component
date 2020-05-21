<script>
  import VTitle from "./components/Vtitle.svelte";
  import VMenu from "./components/VMenu.svelte";
  import Card from "./components/Card.svelte";
  import SmallCard from "./components/SmallCard.svelte";
  import MiniCard from "./components/MiniCard.svelte";
  export let name, desc;
</script>

<style>
  main {
    text-align: center;
    margin: 0 auto;
  }

  #contentContainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 800px;
    margin: auto;
    padding: 16px;
  }

  #blockContainer {
    display: flex;
    height: 284px;
    flex-direction: column;
    justify-content: space-between;
  }
</style>

<main>
  <VTitle>{name} - {desc}</VTitle>
  <VMenu />
  <div id="contentContainer">
    <Card />
    <div id="blockContainer">
      <SmallCard />
      <MiniCard />
    </div>
  </div>
</main>
