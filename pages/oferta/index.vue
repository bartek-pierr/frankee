<template>
  <section class="offer">
    <div class="offer__branding">
      <h2>#Branding</h2>
      <p>Kompleksowy proces tworzenia unikalnej identyfikacji wizualnej dla Twojej marki, produktu lub usługi.</p>
    </div>
    <div class="offer__content">
      <h2>#Content</h2>
      <p>Profesjonalne usługi w zakresie tworzenia atrakcyjnych wizualnie i skutecznych materiałów reklamowych.</p>
    </div>
    <div class="offer__socials">
      <h2>#Socials</h2>
      <p>Dotrzyj do swoich potencjalnych klientów i zbuduj wizerunek swojej marki za pomocą najpopularniejszych social
        mediów takich, jak Facebook, Instagram, TikTok i inne.</p>
    </div>
    <div class="offer__websites">
      <h2>#Strony WWW</h2>
      <p>Stworzymy dla Ciebie nowoczesną stronę internetową, która wyróżni Twój binzes na tle konkurencji.</p>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Frankee. | Oferta'
})
</script>

<style lang="scss" scoped>
.offer {
  height: 100vh;
  width: 100%;
  display: flex;

  &__branding,
  &__content,
  &__socials,
  &__websites {
    height: 100%;
    flex: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    padding-top: 30rem;
    transition: all 0.2s ease-in;

    &:hover {
      scale: 1.05;
    }

    & h2 {
      font-size: 4rem;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    p {
      text-align: center;
    }
  }

  &__branding {
    background-color: $color-primary;
  }

  &__content {
    background-color: $color-white;
  }

  &__socials {
    background-color: $color-black;
    color: $color-white;
  }

  &__websites {
    background-color: $color-primary;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>