<template>
  <button @click="callback($event)">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
  methods: {
    callback: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  color: $color-black;
  text-transform: uppercase;
  font-size: 1.2rem;
  border: 2px solid $color-black;
  padding: 0.8rem 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: 1.1;
    color: $color-black;
    background-color: $color-primary;
    border: 2px solid transparent;
  }
}
</style>