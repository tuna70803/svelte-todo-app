<div class="folder-item" on:click|preventDefault={onClick}>
  <FolderIcon index={index} />
  <div class="folder-item__content">
    <span class="folder-item__name">
      {name}
    </span>
    <span class="folder-item__count">
      {count}
    </span>
  </div>
</div>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import FolderIcon from './FolderIcon.svelte';

  export let index = 0;
  export let id = 0;
  export let name = '';
  export let count = 0;

  const dispatch = createEventDispatcher();
  const onClick = () => dispatch('clicked', { id });
</script>

<style lang="scss">
.folder-item {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 0 8px 0 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ebecf1;
  }

  &__content {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    margin-left: 8px;
    overflow: hidden;
  }

  &__name {
    flex: 1 1 auto;
    font-size: 0.75rem;
    color: #33363b;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__count {
    font-size: 0.7rem;
    color: #bac2c6;
    line-height: 1.2;
    margin: 0 8px;
  }
}
</style>
