<template>
  <div class="section">
    <div class="section__header">
      <h2>{{ sectionName }}</h2>
      <img src="../assets/images/icons/arrow-icon.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionName: String,
  }
};
</script>

<style lang="scss" scoped>
.section {
  &__header {
    min-height: 70vh;
    background-color: $color-primary;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    position: relative;

    & img {
      height: 10rem;
      width: 10rem;
      position: absolute;
      right: 10rem;
      bottom: 4rem;
      opacity: 0.8;
    }

    & h2 {
      margin-left: 10rem;
      font-size: 4rem;
      font-weight: 800;
      line-height: 10rem;

      & span {
        color: $color-white;
        font-weight: 600;
        font-size: 12rem;
      }
    }
  }
}
</style>