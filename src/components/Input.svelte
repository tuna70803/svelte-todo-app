<input
  class={`input ${classname}`}
  class:input--underline={underline}
  bind:value
  placeholder={placeholder}
  maxlength={maxLength}
/>

<script lang="ts">
  let classname = '';
  export { classname as class };
  export let placeholder = '';
  export let maxLength = 524288;
  export let underline = false;
  export let value = '';
</script>

<style lang="scss">
.input {
  flex: 1 1 auto;
  border: none;
  background-color: transparent;
  outline: none;
  color: #33363b;
  font-family: 'Open Sans', 'Nanum Gothic', 'Noto Sans KR', sans-serif;
  font-size: 0.85rem;
  line-height: 1.6;
  padding: 5px 10px;

  &::placeholder {
    color: #bac2c6;
    font-size: 0.75rem;
  }

  &--underline {
    border-radius: 0;
    border-bottom: 2px solid #eb5651;
  }
}
</style>