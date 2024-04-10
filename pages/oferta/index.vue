<template>
  <section class="offer">
    <div class="offer__branding">
      <a href="#branding">
        <img src="assets/images/offer/branding-icon.svg" alt="">
        <h2>#Branding</h2>
        <p>Kompleksowy proces tworzenia unikalnej identyfikacji wizualnej dla Twojej marki, produktu lub usługi.</p>
        <AppButton buttonText="Klik!" class="offer__button shadow-md" />
      </a>
    </div>
    <div class="offer__content">
      <a href="#content">
        <img src="assets/images/offer/content-icon.svg" alt="">
        <h2>#Content</h2>
        <p>Profesjonalne usługi w zakresie tworzenia atrakcyjnych wizualnie i skutecznych materiałów reklamowych.</p>
        <AppButton buttonText="Klik!" class="offer__button shadow-md" />
      </a>
    </div>
    <div class="offer__socials">
      <a href="#socials">
        <img src="assets/images/offer/socials-icon.svg" alt="">
        <h2>#Socials</h2>
        <p>Dotrzyj do swoich potencjalnych klientów i zbuduj wizerunek swojej marki za pomocą najpopularniejszych social
          mediów takich, jak Facebook, Instagram, TikTok i inne.</p>
        <AppButton buttonText="Klik!" class="offer__button shadow-md" />
      </a>
    </div>
    <div class="offer__websites">
      <a href="#websites">
        <img src="assets/images/offer/webpages-icon.svg" alt="">
        <h2>#Strony WWW</h2>
        <p>Stworzymy dla Ciebie nowoczesną stronę internetową, która wyróżni Twój binzes na tle konkurencji.</p>
        <AppButton buttonText="Klik!" class="offer__button shadow-md" />
      </a>
    </div>
  </section>

  <Branding id="branding" />
  <Content id="content" />
  <Socials id="socials" />
  <Websites id="websites" />
</template>

<script setup>
useHead({
  title: 'Frankee. | Oferta'
})
</script>

<style lang="scss" scoped>
.offer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: $color-white;

  &__branding,
  &__content,
  &__socials,
  &__websites {
    height: 100vh;
    flex: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 4rem;
    transition: all 0.2s ease-in;

    &:hover {
      border-bottom: 4rem solid $color-primary;
    }

    & a {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      transition: all 0.2s ease-in;

      &:hover {
        scale: 1.05;
      }
    }

    & h2 {
      font-size: 4rem;
      margin-bottom: 2rem;
      font-weight: 600;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  &__button {
    border: none;
    width: fit-content;
    box-shadow: none;
    padding: 0.8rem 4rem;
    align-self: center;
    margin-top: 2rem;
    color: $color-primary;
    font-size: 2rem;
    font-weight: 800;

    &:hover {
      border: none;
      background-color: $color-white;
    }
  }
}
</style>