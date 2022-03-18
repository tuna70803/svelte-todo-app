<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte
    apps.
  </p>
  <div class="scss-test">
    <span>with scss!</span>
  </div>
</main>

<script lang="ts">
  export let name: string;
</script>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .scss-test {
    font-size: 20px;
    color: yellowgreen;

    & > span {
      font-size: 44px;
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
