<button class={`button ${classname} ${buttonStyle}`} class:button--flat={flat} on:click>
  <slot></slot>
</button>

<script lang="ts">
  let classname = '';
  export { classname as class };
  export let round = false;
  export let circle = false;
  export let flat = false;

  let buttonStyle = '';
  $: {
    if (round) {
      buttonStyle = 'button--round';
    } else if (circle) {
      buttonStyle = 'button--circle';
    } else {
      buttonStyle = '';
    }
  }
</script>

<style lang="scss">
.button {
  border-radius: 5px;
  border: none;
  background-color: #eb5651;
  outline: none;
  padding: 8px 12px;
  color: #ffffff;
  font-family: 'Open Sans', 'Nanum Gothic', 'Noto Sans KR', sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  line-height: 1.4;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e73a34;
  }

  &--round {
    border-radius: 25px;
  }

  &--circle {
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
  }

  &--flat {
    color: #33363b;
    font-weight: normal;
    background-color: transparent;

    &:hover {
      background-color: #ebecf1;
    }
  }
}
</style>
