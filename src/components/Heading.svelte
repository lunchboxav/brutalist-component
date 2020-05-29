<script>
  let className = "";
  export { className as class };
</script>

<style type="text/scss">
  @import "../styles/styles";

  .heading5xl {
    @include heading5xl();
  }

  .heading4xl {
    @include heading4xl();
  }

  .heading3xl {
    @include heading3xl();
  }

  .heading2xl {
    @include heading2xl();
  }
</style>

<h2 class={className}>
  <slot />
</h2>
