<script context="module">
	export const prerender = true;
	import { base } from '$app/paths';
  export async function load({ fetch }) {
    const posts = await fetch(`${base}/index.json`)
        .then((r) => r.json());
    return {
      props: { posts }
    }
  }
</script>

<script>
  export let posts;
</script>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to kiibo's portofolio
	</h1>
</section>

<div>
	<p class="info">{posts.length} posts.</p>
	{#each posts as post}
		<a href={`${base}/${post.slug}`}>
			<h2 class="title">{post.metadata.title}</h2>
			<p>{post.metadata.excerpt}</p>
		</a>
	{/each}
</div>


<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

  h2.title {
    margin-top: 32px;
    margin-bottom: 0;
    &:hover {
      color: #40b3ff;
    }
  }
  p {
    color: #555;
    margin: 0;
  }
</style>
