<script>
  import VTitle from "../components/VTitle.svelte";
  import VMenu from "../components/VMenu.svelte";
  import Card from "../components/Card.svelte";
  import SmallCard from "../components/SmallCard.svelte";
  import MiniCard from "../components/MiniCard.svelte";
  export let name, desc;
</script>

<style>
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

<div>
  <VTitle>{name} - {desc}</VTitle>
  <VMenu />
  <h2>Card</h2>
  <div id="contentContainer">
    
    <Card />
    <div id="blockContainer">
      <SmallCard />
      <MiniCard />
    </div>
  </div>
</div>
