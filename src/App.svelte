<main class="app">
  <Floater />
</main>

<script lang="ts">
  import Floater from './views/Floater.svelte';
</script>

<style lang="scss">
  .app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .app::after {
    content: "";
    background: url('../images/background.jpg');
    background-size: cover;
    opacity: 0.1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
</style>
