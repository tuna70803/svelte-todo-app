<aside class="sidebar">
  <Folders />
  <NewFolder />
</aside>

<script lang="ts">
  import Folders from './Folders.svelte';
  import NewFolder from './NewFolder.svelte';
</script>

<style lang="scss">
.sidebar {
  width: 30%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  border-radius: 0 0 0 5px;
  background-color: #f4f5f9;
  padding: 20px;
}
</style>
