<script>
	import '../app.scss';
	import GithubCorner from '$lib/GithubCorner.svelte';
</script>

<svelte:head>
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Overpass">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Fira+Mono">
</svelte:head>

<GithubCorner/>

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
