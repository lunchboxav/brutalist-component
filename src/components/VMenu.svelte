<style>
  .menuContainer {
    text-align: left;
    position: absolute;
    left: 72px;
    font-family: "Helmet";
  }
  ul {
    list-style: none;
  }
  li {
    font-size: 1.125rem;
    padding: 8px;
  }
  .active {
    background: black;
    color: yellow;
  }
</style>

<div class="menuContainer">
  <!-- <ul>
    <li>Home <em>(coming soon)</em> </li>
    <li class="active">Card</li>
    <li>Hero Image <em>(coming soon)</em></li>
    <li>Form <em>(coming soon)</em></li> 
  </ul>-->
  <slot></slot>
</div>
