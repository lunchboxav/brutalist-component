<script>
  let className = '';
  export { className as class };
</script>

<style type="text/scss">
  @import '../styles/styles';

  .bodyXl {
    @include bodyXl();
  }

  .bodyL {
    @include bodyL();
  }

  .bodyM {
    @include bodyM();
  }

  .active {
    @include color();
  }
</style>

<p class="{className}">
  <slot></slot>
</p>
