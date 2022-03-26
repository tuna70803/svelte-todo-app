<div class="floater">
  <Header />
  <section class="floater__content">
    <Sidebar />
    <Workspace />
  </section>
</div>

<script lang="ts">
  import Header from './Header.svelte';
  import Sidebar from './Sidebar.svelte';
  import Workspace from './Workspace.svelte';
</script>

<style lang="scss">
.floater {
  width: 70%;
  max-width: 1024px;
  height: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
  position: relative;

  &__content {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>