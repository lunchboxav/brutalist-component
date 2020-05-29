<script>
  import Text from "../components/Text.svelte"
  import Heading from "../components/Heading.svelte"
</script>

<h2>Typography</h2>
<p>Typography plays significant part in Tense. Basically, we want the text to be front and center and makes the textual information as clear as possible. Since Tense omits the use of icon, each text should be used to convey information as explicit and as clear as possible, even if it take more space than expected.</p>
<p>Typically, brutalist design style employs bold and large font, mostly serif type. A good mono font can also be used, keeping the site stylish, minimalist, but still features a strong character. Also, most of brutalist site only use single font.</p>
<p>Implementation wise, Tense only uses one font and one style with varying size for different context.</p>
<p>Size wise, all fonts are measured in rems, with 1 rem equals to 16px.</p>

<h3>List and Details of Font Types</h3>
The list below displays various font types utilized by Tense.

<!-- <Heading fontSize={"6xl"}>Life is good, heading font, 4 rem</Heading>
<Heading fontSize={"5xl"}>Life is good, heading font, 3 rem</Heading>
<Heading fontSize={"4xl"}>Life is good, heading font, 2.25 rem</Heading>
<Heading fontSize={"3xl"}>Life is good, heading font, 1.875 rem</Heading>
<Heading fontSize={"2xl"}>Life is good, heading font, 1.5 rem</Heading>
<Heading fontSize={"xl"}>Life is good, heading font, 1.25 rem</Heading>

<Text fontSize={"lg"}>Life is good, body font, 1.125 rem</Text>
<Text fontSize={"md"}>Life is good, body font, 1 rem</Text>
<Text fontSize={"sm"}>Life is good, body font, 0.875 rem</Text>
<Text fontSize={"xs"}>Life is good, body font, 0.75 rem</Text> -->

<Text class="bodyXl">This is just a test, body font, 1.25 rem</Text>
<Text class="bodyL">This is just a test, body font, 1.125 rem</Text>
<Text class="bodyM">This is just a test, body font, 1 rem</Text>
