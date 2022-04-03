<section class="folders">
  {#each $folders as folder, index (folder.id) }
    <FolderItem
      index={index}
      id={folder.id}
      name={folder.name}
      count={0}
      on:clicked={onFolderClick}
    />
  {/each}
</section>

<script lang="ts">
  import { folders } from '../stores/folders';
  import FolderItem from './FolderItem.svelte';

  const onFolderClick = (event) => {
    console.log('onClick Folder! id: ', event.detail.id);
  };
</script>

<style lang="scss">
.folders {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 10px 0;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
