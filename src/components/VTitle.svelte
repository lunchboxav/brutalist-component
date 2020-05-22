<style>
  .headingContainer {
    background-color: black;
    color: white;
    position: sticky;
    height: 100vh;
    top: 0px;
    text-align: center;
    writing-mode: vertical-lr;

    /* TODO: someday, we'll get back to this */
    /* transform: rotate(270deg) translate(-100%, 0px); */
    /* transform-origin: top left; */
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
