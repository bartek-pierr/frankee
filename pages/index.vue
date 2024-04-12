<template>
  <section class="mainPage">
    <div class="mainPage__wrapper">
      <div class="mainPage__wrapper--text">
        <h1>Frankee<span>.</span></h1>
        <h2><span>SOCIAL MEDIA</span> & <span>CONTENT CREATION</span></h2>
        <p>Pierwsza agencja <span>social media</span> w <span>Karkonoszach</span>. Specjalizujemy się w profesjonalnej
          obsłudze firmowych kont na <span>Facebook</span>, <span>Instagram</span>, <span>LinkedIn</span> i
          <span>TikTok</span>.
        </p>
      </div>
    </div>
  </section>
  <section class="successSteps">
    <div class="successSteps__stepOne">
      <div class="successSteps__stepOne--imgWrapper">
        <img src="assets/images/home/step-one.svg" alt="">
      </div>
      <div class="successSteps__stepOne--textWrapper">
        <h4></h4>
        <p>Buduj z nami <span>wizerunek</span> swojej firmy.</p>
      </div>
    </div>
    <div class="successSteps__stepTwo">
      <div class="successSteps__stepTwo--imgWrapper">
        <img src="assets/images/home/step-two.svg" alt="">
      </div>
      <div class="successSteps__stepOne--textWrapper">
        <p>Nawiązuj kontakt z <span>grupą docelową.</span></p>
      </div>
    </div>
    <div class="successSteps__stepThree">
      <div class="successSteps__stepThree--imgWrapper">
        <img src="assets/images/home/step-three.svg" alt="">
      </div>
      <div class="successSteps__stepOne--textWrapper">
        <p>Urzymuj zainteresowanie i <span>sprzedawaj!</span></p>
      </div>
    </div>
  </section>

  <section class="cooperation">
    <h2>Zobacz, jak wygląda współpraca <span>z agencją social media.</span></h2>
    <div class="cooperation__steps">
      <div>
        <h4>01.</h4>
        <p>Skontaktuj się - zadzwoń, napisz maila lub odezwij się na Instagramie</p>
      </div>
      <div>
        <h4>02.</h4>
        <p>Przeanalizujemy dotychczasowe działania</p>
      </div>
      <div>
        <h4>03.</h4>
        <p>Ustalimy nową strategię</p>
      </div>
      <div>
        <h4>04.</h4>
        <p>Po zaakceptowaniu ruszymy ze zmianami</p>
      </div>
      <div>
        <h4>05.</h4>
        <p>Przedstawimy wyniki</p>
      </div>
      <div>
        <h4>06.</h4>
        <p>Dopasujemy zmiany lub poprawki</p>
      </div>
    </div>
  </section>

  <section class="contact">
    <div class="contact__text">
      <h2>Chcesz wypromować swoją firmę w <span>social mediach</span>?</h2>
      <p>Skontaktuj się już dzisiaj!</p>
      <AppButton buttonText="Kontakt" class="contact__button shadow-md" />
    </div>
    <div class="contact__interactivTextbox">
      <p class="typing-demo">Cześć, jestem Basia, w czym mogę Ci pomóc?</p>
    </div>
  </section>

  <section class="about">
    <h2>Z nami zyskasz znacznie <span>więcej</span></h2>
    <p>Oferujemy kompleksową obsługę marketingową, a wyróżniają nas:</p>
    <div class="about__icons">
      <div>
        <img src="assets/images/home/commitment-icon.svg" alt="">
        <h3>Zaangażowanie</h3>
        <p>Analizujemy, aktywnie szukamy nowych możliwości i wdrażamy je. Możesz liczyć na naszą proaktywność.</p>
      </div>
      <div>
        <img src="assets/images/home/relations-icon.svg" alt="">
        <h3>Relacje</h3>
        <p>Partnerskie, uczciwe relacje to dla nas podstawa. Jesteśmy z Tobą w ciągłym kontakcie i zawsze do dyspozycji.</p>
      </div>
      <div>
        <img src="assets/images/home/work-style-icon.svg" alt="">
        <h3>Styl pracy</h3>
        <p>Jeden specjalista obsługuje maksymalnie kilka projektów, co pozwala nam pracować dokładnie i skutecznie.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.mainPage {
  width: 100%;
  background-color: $color-white;

  &__wrapper {
    height: 80vh;
    background-image: url(assets/images/home/hero-bg.png);
    background-size: cover;

    &--text {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #0000006c;
      width: 100vw;
      height: 80vh;
      padding: 0 4rem 4rem 4rem;

      & h1 {
        font-size: 20rem;
        font-weight: 900;
        color: $color-white;

        & span {
          color: $color-primary;
        }
      }

      & h2 {
        color: $color-primary;
        font-size: 4rem;
        font-weight: 500;
        padding-left: 2rem;
        margin-top: -4rem;

        & span {
          color: $color-white;
        }
      }

      & p {
        color: $color-primary;
        width: 70%;
        padding-left: 2rem;
        margin-top: 2rem;
        font-size: 2.4rem;
        font-family: "Cabin", sans-serif;

        & span {
          color: $color-white;
        }
      }
    }
  }
}

.successSteps {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 4rem 10rem 0 10rem;
  background-color: $color-white;

  &__stepOne,
  &__stepTwo,
  &__stepThree {
    display: flex;
    align-items: center;
    flex: 30%;
    background-color: $color-white;
    transition: all 0.3s ease-in-out;
    height: auto;
    padding: 2rem;
    border: 0.2rem solid $color-primary;
    border-radius: 0.8rem;


    &--imgWrapper {
      width: 50%;
      height: 100%;

      & img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }

    &--textWrapper {
      width: 50%;
      padding-left: 2rem;

      & span {
        font-weight: 800;
      }
    }

    &:hover {
      scale: 1.05;
    }
  }
}

.cooperation {
  padding: 4rem 10rem;
  background-color: $color-white;

  & h2 {
    font-size: 4rem;
    color: $color-primary;
    font-weight: 600;
    margin-bottom: 4rem;

    & span {
      color: $color-black;
    }
  }

  &__steps {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    & div {
      flex: 25%;
      display: flex;
      align-items: center;
      gap: 1rem;

      & h4 {
        font-size: 8rem;
        font-weight: 700;
        color: $color-primary;
        opacity: 0.4;
      }

      & p {
        font-size: 2rem;
      }
    }
  }
}

.contact {
  width: 100vw;
  height: 70vh;
  background-image: url(assets/images/home/contact-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 10rem;

  &__text {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;

    & h2 {
      font-size: 4rem;
      color: $color-black;
      font-weight: 600;

      & span {
        color: $color-white;
      }
    }

    & p {
      margin-top: 2rem;
    }
  }

  &__button {
    margin-top: 6rem;
    background-color: $color-white;
    padding: 1.2rem 4rem;

    &:hover {
      color: $color-primary;
      background-color: $color-black;
    }
  }

  &__interactivTextbox {
    width: 54rem;
    position: absolute;
    bottom: 4rem;
    left: 40rem;
    background-color: $color-white;
    padding: 2rem;
    border: 0.2rem solid $color-black;
    border-radius: 0.8rem;
    display: grid;
  place-items: center;
  }
}

.typing-demo {
  width: 54rem;
  animation: typing 4s steps(22), blink 1s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2rem;
  animation-iteration-count: infinite;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

.about {
  background-color: $color-white;
  padding: 4rem 10rem;
  text-align: center;

  & h2 {
    font-size: 4rem;
    color: $color-primary;
    font-weight: 600;
    margin-bottom: 1rem;

    & span {
      color: $color-black;
    }
  }

  & p {
    font-size: 1.8rem;
  }

  &__icons {
    margin-top: 4rem;
    display: flex;

    & div {
      flex: 30%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      & img {
        height: 18rem;
        margin-bottom: 1rem;
      }

      & h3 {
        font-size: 2.4rem;
        font-weight: 600;
        color: $color-primary;
      }

      & p {
        margin-top: 1rem;
      }
    }
  }
}
</style>