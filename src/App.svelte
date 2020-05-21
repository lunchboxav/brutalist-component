<script>
  import router from "page";
  import Home from "./routes/Home.svelte";
  import Card from "./routes/Card.svelte";
  import VMenu from "./components/VMenu.svelte";

  let page;
  let params;
  let props;

  export let name, desc;

  router("/", () => {
    page = Home;
    props = {
      name: name,
      desc: desc
    }
  })

  router("/card", () => {
    page = Card;
    props = {
      name: name,
      desc: desc
    }
  })
  router.start();
</script>

<VMenu>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/card">Card</a></li>
</ul>
</VMenu>



<main>
  <svelte:component this={page} {...props}/>
</main>
