<div class="modal">
  <section class="modal__container">
    <slot></slot>
    <footer class="modal__buttons">
      <Button class="modal__negative" flat on:click={onNegative}>
        {negative}
      </Button>
      <Button class="modal__positive" on:click={onPositive}>
        {positive}
      </Button>
    </footer>
  </section>
</div>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  export let negative = 'Cancel';
  export let positive = 'Done';

  const dispatch = createEventDispatcher();
  const onNegative = () => dispatch('negative');
  const onPositive = () => dispatch('positive');
</script>

<style lang="scss">
.modal {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  &__container {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    padding: 30px 20px 20px 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__buttons {
    align-self: flex-end;
    margin-top: 20px;
  }

  &__negative {
    margin-right: 2px;
  }
}
</style>