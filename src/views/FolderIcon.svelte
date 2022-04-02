<span class={`folder-icon folder-icon--${index % 7}`}></span>

<script lang="ts">
  export let index = 0;
</script>

<style lang="scss">
.folder-icon {
  width: 0.7rem;
  height: 0.7rem;
  flex: 0 0 auto;
  border-radius: 50%;

  &--0 {
    background-color: #eb5651;
  }

  &--1 {
    background-color: #ed8a3f;
  }

  &--2 {
    background-color: #f5d769;
  }

  &--3 {
    background-color: #8db87c;
  }

  &--4 {
    background-color: #008bff;
  }

  &--5 {
    background-color: #20457c;
  }

  &--6 {
    background-color: #6a60a9;
  }
}
</style>
