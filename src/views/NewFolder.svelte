<div class="new-folder" on:click={openNewFolderModal}>
  <img class="new-folder__icon" src="images/ic-add-gray.svg" alt="add" />
  <span class="new-folder__label">Create Folder</span>
</div>

{#if isModalOpen}
  <Modal positive="Create" on:negative={closeNewFolderModal} on:positive={createNewFolder}>
    <section class="new-folder__input-form">
      <span class="new-folder__input-form-title">New Folder</span>
      <Input
        bind:value={newFolderModel}
        placeholder="enter a folder name"
        maxLength={30}
        underline
      />
    </section>
  </Modal>
{/if}

<script lang="ts">
  import { folders } from '../stores/folders';
  import Modal from '../components/Modal.svelte';
  import Input from '../components/Input.svelte';
  import { makeId } from '../utils/idGenerator';

  let isModalOpen = false;
  const openNewFolderModal = () => {
    isModalOpen = true;
  };

  const closeNewFolderModal = () => {
    isModalOpen = false;
    newFolderModel = '';
  };

  const createNewFolder = () => {
    if (isValidFolderName() === false) {
      return;
    }

    $folders = [...$folders, {
      id: makeId(),
      name: newFolderModel
    }];
    closeNewFolderModal();
  };

  const isValidFolderName = () => {
    if (newFolderModel === '') {
      return false;
    }

    const exists = $folders.some(folder => folder.name === newFolderModel);
    if (exists) {
      return false;
    }

    return true;
  };

  let newFolderModel = '';
</script>

<style lang="scss">
.new-folder {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ebecf1;
  }

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__label {
    color: #bac2c6;
    font-size: 0.8rem;
    margin-left: 8px;
  }

  &__input-form {
    min-width: 400px;
    display: flex;
    flex-direction: column;

    &-title {
      color: #33363b;
      font-size: 0.8rem;
      font-weight: 800;
      margin: 0 0 20px 10px;
    }
  }
}
</style>