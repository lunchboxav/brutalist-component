import App from './App.svelte';

const app = new App({
	target: document.body,
	//target: document.getElementById("app"),
	props: {
		name: 'Tense',
		desc: 'A brutalist inspired design system',
		author: 'Adityo Pratomo'
	}
});

export default app;
