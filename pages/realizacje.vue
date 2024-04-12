<template>
  <section class="portfolio">
  <LightGallery />
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import GLightbox from 'glightbox';

onMounted(() => {
  function init(e) {
    if (!e.target.closest('.item')) return;
    let hero = document.querySelector('div[data-pos="0"]');
    let target = e.target.parentElement;
    [target.dataset.pos, hero.dataset.pos] = [hero.dataset.pos, target.dataset.pos];
}

window.addEventListener('click', init, false);
});
useHead({
  title: 'Frankee. | Realizacje'
})

</script>

<style lang="scss" scoped>
</style>