<script>
  export let active = false;
  function toggleActiveLink(event) {
    active = !active;
  }
  let current = "home";
  // console.log(current);
</script>

<style>
  .menuContainer {
    font-family: "Helmet";
    position: sticky;
    top: 40px;
  }
  ul {
    list-style: none;
  }
  li {
    margin: 8px 0;
  }

  a {
    font-size: 1.125rem;
    padding: 8px 16px;
  }

  .active {
    background: black;
    color: yellow;
  }
</style>

<div class="menuContainer">
  <ul>
    <li>
      <a
        href="/"
        class:active={current === 'home'}
        on:click={() => (current = 'home')}>
        Home
      </a>
    </li>
    <li>
      <a
        href="/card"
        class:active={current === 'card'}
        on:click={() => (current = 'card')}>
        Card
      </a>
    </li>
  </ul>
  <slot />
</div>
