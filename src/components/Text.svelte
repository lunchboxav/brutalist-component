<script>
  export let fontSize;
  let fontSizes = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  }
</script>

<style>

</style>

<p style="font-size: {fontSizes[fontSize]}">
  <slot></slot>
</p>
