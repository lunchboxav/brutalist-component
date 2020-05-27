<script>
  // export let fontSize;
  // let fontSizes = {
  //   xs: "0.75rem",
  //   sm: "0.875rem",
  //   md: "1rem",
  //   lg: "1.125rem",
  //   xl: "1.25rem",
  //   "2xl": "1.5rem",
  //   "3xl": "1.875rem",
  //   "4xl": "2.25rem",
  //   "5xl": "3rem",
  //   "6xl": "4rem",
  // }
  // let bodyXl = true;
  // let className = "boo";
  export let bodyM = false;
  export let bodyL = false;
  export let bodyXl = false;
</script>

<style type="text/scss">
  @import '../styles/vars';

  .bodyXl {
    font-size: $xlarge-medium-font-size;
    font-weight: $xlarge-medium-font-weight;
    line-height: $xlarge-medium-line-height;
  }

  .bodyL {
    font-size: $large-medium-font-size;
    font-weight: $large-medium-font-weight;
    line-height: $large-medium-line-height;
  }

  .bodyM {
    font-size: $medium-medium-font-size;
    font-weight: $medium-medium-font-weight;
    line-height: $medium-medium-line-height;
  }
</style>

<!-- <p style="font-size: {fontSizes[fontSize]}">
  <slot></slot>
</p> -->

<p class:bodyM class:bodyL class:bodyXl>
  <slot></slot>
</p>

