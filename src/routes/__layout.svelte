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

<footer>
	<p>visit <a href="https://www.wantedly.com/id/sk_shota_kizawa">my profile</a> to know shota kizawa</p>
</footer>

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

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px;
	}
	footer a {
		font-weight: bold;
	}
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
