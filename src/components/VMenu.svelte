<script>
  export let active = false;
  function toggleActiveLink(event) {
    active = !active;
  }

  // Ensures that the current path is reflected in navbar.
  let location = window.location.pathname;
  let current = location === "/" ? "home" : location.substr(1);
</script>

<style>
  .menuContainer {
    font-family: "Helmet";
    position: sticky;
    top: 40px;
  }

  a {
    font-size: 1.125rem;
    padding: 8px 16px 8px 8px;
    display: block;
    margin-left: 16px;
  }

  .active {
    background: black;
    color: yellow;
  }

</style>

<div class="menuContainer">
  <nav>
    <a
      href="/"
      class:active={current === 'home'}
      on:click={() => (current = 'home')}>
      Home
    </a>
    <a
      href="/concept"
      class:active={current === 'concept'}
      on:click={() => (current = 'sconcept')}>
      Concept
    </a>
    <a
      href="/color"
      class:active={current === 'color'}
      on:click={() => (current = 'color')}>
      Color
    </a>
    <a
      href="/typography"
      class:active={current === 'typography'}
      on:click={() => (current = 'typography')}>
      Typography
    </a>
    <a
      href="/card"
      class:active={current === 'card'}
      on:click={() => (current = 'card')}>
      Card
    </a>
    <a
      href="/form"
      class:active={current === 'form'}
      on:click={() => (current = 'form')}>
      Form
    </a>
  </nav>
  <slot />
</div>
