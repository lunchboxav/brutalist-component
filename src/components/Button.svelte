<script>
  let count = 0;
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }

  $: console.log(`the count is ${count}`);
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
