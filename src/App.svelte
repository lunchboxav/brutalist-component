<script>
  import router from "page";
  import home from "./routes/home-page.svelte";
  import card from "./routes/card-page.svelte";
  import VTitle from "./components/VTitle.svelte";
  import VMenu from "./components/VMenu.svelte";

  let page;
  let params;
  let props;

  export let name, desc;

  router("/", () => (page = home));
  router("/card", () => (page = card));
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
    padding: 16px 64px 32px 64px;
    width: 960px;
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
