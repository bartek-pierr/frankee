<template>
  <section class="about">
    <div class="about__header">
      <h2>Kilka słów o<br><span>Frankee.</span></h2>
      <img src="../assets/images/arrow-icon.png" alt="">
      <div class="about__props">
        <div class="about__props--stepOne">
          <h4>01.</h4>
          <p>odpowiedzialność</p>
        </div>
        <div class="about__props--stepTwo">
          <h4>02.</h4>
          <p>komunikacja</p>
        </div>
        <div class="about__props--stepThree">
          <h4>03.</h4>
          <p>skuteczność</p>
        </div>
        <div class="about__props--stepFour">
          <h4>04.</h4>
          <p>przejrzystość</p>
        </div>
      </div>
    </div>
    <div class="about__info">
      <p class="about__info--little">Dlaczego my</p>
      <h3>Działamy skuteczniej, czyli...</h3>
      <div>
        <article>
          <h4>z gwarancją zero-waste</h4>
          <div class="separator"></div>
          <p>
            Ekologiczne „zero-waste” to jak najmniej odpadów, ochrona zasobów… I dokładnie takie są kampanie PPC w
            naszym wykonaniu, bo nie marnujemy w nich budżetów Klientów. A niestety, na każdym koncie adsowym, które
            przejmowaliśmy, były reklamy śmieci – pochłaniające pieniądze bez przełożenia na konwersje. Usuniemy je z
            Twojego konta i poprawimy wyniki!
          </p>
        </article>
        <article>
          <h4>bazując na wieloletnim doświadczeniu</h4>
          <div class="separator"></div>
          <p>
            Doświadczenie w PPC przekłada się na lepsze efekty, bo pozwala na odejście od schematów, których skuteczność jest ograniczona. Dlatego nasz zespół tworzą tylko specjaliści SEM, Facebook Ads, od Optymalizacji Współczynnika Konwersji i komunikacji, którzy pracowali już przy setkach kampanii, dla ponad 20 branż, m.in. home & decor, fashion, beauty, finanse, catering, HoReCA, deweloperskiej, SaaS, IT czy gamingowej.
          </p>
        </article>
        <article>
          <h4>widzimy więcej, wiemy szybciej</h4>
          <div class="separator"></div>
          <p>
            Nasz działania zabezpieczamy autorskimi SmartSkryptami. Pozwalają nam szybciej reagować na anomalie, odejścia od pożądanych poziomów, np. w generowanym ruchu. Zapewniają informacje, które nie są standardowo dostarczane przez Google'a czy Facebooka, a wpływają na efekty, jak brak powiadomień o odrzuconych rozszerzeniach przy Google Ads. Wspierają kontrolowanie wydajności, dając sygnał, gdy pojawiają się czynniki zaniżające wydajność reklam.
          </p>
        </article>
        <article>
          <h4>dostrzega nas Google</h4>
          <div class="separator"></div>
          <p>
            Mamy tytuł Google Partner Premium – gigant wyróżnia nim tylko najlepsze agencje SEM. Przygląda się ich działaniom i sygnuje te, które udowadniają, że z Google Ads można osiągnąć ponadprzeciętne wyniki. Potwierdza tym także, że nad Twoimi reklamami będą pracowali certyfikowani i wprawieni specjaliści. Czujne oko „G” dostrzegło również nieszablonowe podejście w kampanii dla Homebooka, dzięki której zabłysnęliśmy wśród nominowanych w Google Premier Awards w kategorii Shopping Excellence.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Frankee. | O Nas'
})
</script>

<style lang="scss" scoped>
.about {

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
      opacity: 0.1;
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

  &__props {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 2rem;
    left: 10rem;
    bottom: -10rem;
    height: 20rem;
    background-color: $color-black;
    padding: 2rem;
    width: 80rem;
    margin-bottom: 4rem;

    &--stepOne,
    &--stepTwo,
    &--stepThree,
    &--stepFour {
      flex: 25%;
      flex-direction: column;
      height: 100%;
      background-color: $color-white;
      color: $color-black;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 2rem;

      & h4 {
        color: $color-primary;
        font-size: 6rem;
      }

      & p {
        margin-top: -2rem;
        font-size: 1.6rem;
        font-weight: 800;
      }
    }
  }

  &__info {
    padding: 4rem 10rem;
    margin-bottom: 6rem;

    &--little {
      margin-top: 7rem;
      text-transform: uppercase;
      color: $color-primary;
    }

    & h3 {
      font-size: 4rem;
      margin-bottom: 4rem;
    }

    & div {
      display: flex;
      flex-wrap: wrap;
      gap: 4rem;

      & article {
        flex: 40%;
        height: 20rem;

        & h4 {
          font-size: 3rem;
        }
      }
    }
  }
}
</style>