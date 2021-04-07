<script>
  import { onMount } from "svelte";
  export let hmmn;

  onMount(async () => {

    //test request of api login
    const res = await fetch("/api/login");
    let str_req = await res.text();
    hmmn = str_req;
  });
</script>

<main>
  <h1>MPS</h1>
  <h2>
    Deployed with
    <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">
      Vercel
    </a>
    
  </h2>
  <p>
    <a
      href="https://github.com/vercel/vercel/tree/master/examples/svelte"
      target="_blank"
      rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app with three directories,
    <code>/public</code>
    for static assets,
    <code>/src</code>
    for components and content, and
    <code>/api</code>
    which contains a serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    function.
  </p>
  <br />
  <p>{hmmn ? hmmn : 'Loading req...'}</p>
</main>
