<script context="module">
  import { base } from '$app/paths';
  export async function load({ params, fetch }) {
    const slug = params.slug;
    const post = await fetch(`${base}/${slug}.json`)
        .then((r) => r.json());
    return {
      props: { post }
    };
  }
</script>

<script>
  export let post;
  let date = post.metadata.date.toUpperCase();
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>

<h1 class="title">{post.metadata.title}</h1>
<p class="info"><a href="https://github.com/shota_kizawa">Shota Kizawa</a> {date}</p>
{@html post.content}
