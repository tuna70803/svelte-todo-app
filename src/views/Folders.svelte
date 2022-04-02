<section class="folders">
  {#each testFolders as folder, index (folder.id) }
    <FolderItem
      index={index}
      id={folder.id}
      name={folder.name}
      count={folder.count}
      on:clicked={onFolderClick}
    />
  {/each}
</section>

<script lang="ts">
  import FolderItem from './FolderItem.svelte';

  const testFolders = [
    {
      id: 1,
      name: 'item-1',
      count: 5
    },
    {
      id: 2,
      name: 'item-2',
      count: 10
    }
  ];

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
