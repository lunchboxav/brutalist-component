<script>
  import Card from "../components/Card.svelte";
  import SmallCard from "../components/SmallCard.svelte";
  import MiniCard from "../components/MiniCard.svelte";
</script>

<style>

</style>

<div>
  <h2>Card</h2>
  <p>
    Card is a way to group multiple elements as a single entity. This group can
    contain media such as image and texts. We provide several variants of Cards
    that can be utilized based on its use cases, such as available space and the
    intended conveyed information.
  </p>
  <h3>Default Card</h3>
  <p>
    The default Card, aptly named, Card, contains full size image and big
    typography. This can be used to put the content front and center to grab
    attention. With the ample space, it can also displays interactive item such
    as button that can be used to interact with the contextual information
    available on that card.
  </p>
  <Card />
  <h3>Compact Card</h3>
  <p>
    A more compact form of Card is both named Small Card and Mini Card. This is
    aimed to provide many information but in a smaller space. If you don't have
    much available space, then consider using this. This type of card is also
    suited for usage inside a vertical list.
  </p>
  <h4>Small Card</h4>
  <p>
    Small Card contains the same amount of information as Card, minus the
    interactive area. Also, the descriptive text is shorter in order to reduce
    the space usage.
  </p>
  <SmallCard />
  <h4>Mini Card</h4>
  <p>
    Mini Card contains only text, without image, thus reducing the space usage
    even further. The amount of text here is the same as the one in Small Card.
  </p>
  <MiniCard />

</div>
