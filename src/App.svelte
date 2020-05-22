<script>
  import router from "page";
  import Home from "./routes/Home.svelte";
  import Card from "./routes/Card.svelte";
  import VTitle from "./components/VTitle.svelte";
  import VMenu from "./components/VMenu.svelte";

  let page;
  let params;
  let props;

  export let name, desc;

  router("/", () => (page = Home));
  router("/card", () => (page = Card));
  router.start();
</script>

<style>
  .mainContainer {
    display: flex;
    flex-direction: row;
  }

  #menu {
    /* margin-left: 80px; */
  }

  #content {
    margin: 0 auto;
    padding: 0 32px;
  }
</style>

<div class="mainContainer">
  <VTitle>{name} - {desc}</VTitle>

  <div id="menu">
    <VMenu />
  </div>

  <div id="content">
    <svelte:component this={page} {...props} />
  </div>
</div>
