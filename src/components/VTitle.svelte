<style>
  .headingContainer {
    background-color: black;
    color: white;
    position: absolute;
    width: 100vh;
    transform: rotate(270deg) translate(-100%, 0px);
    transform-origin: top left;
  }

  h1 {
    font-family: "Helmet";
    text-transform: uppercase;
  }
</style>

<div class="headingContainer">
  <h1>
    <slot />
  </h1>
</div>
