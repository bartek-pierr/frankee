<template>
  <section class="mainPage">
    <div class="mainPage__wrapper">
      <h1>Frankee.</h1>
      <h2><span>SOCIAL MEDIA</span> & <span>CONTENT CREATION</span></h2>
      <p>Pierwsza agencja <span>social media</span> w <span>Karkonoszach</span>. Specjalizujemy się w profesjonalnej
        obsłudze firmowych kont na <span>Facebook</span>, <span>Instagram</span>, <span>LinkedIn</span> i
        <span>TikTok</span>.
      </p>
      <div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
        <div><img src="../assets/images/arrow-icon.png" alt=""></div>
      </div>
    </div>
  </section>
  <section class="successSteps">
    <div class="successSteps__stepOne">
      <h4>01.</h4>
      <p>Buduj z nami <span>wizerunek</span> swojej firmy.</p>
    </div>
    <div class="successSteps__stepTwo">
      <h4>02.</h4>
      <p>Nawiązuj kontakt z <span>grupą docelową.</span></p>
    </div>
    <div class="successSteps__stepThree">
      <h4>03.</h4>
      <p>Urzymuj zainteresowanie i <span>sprzedawaj!</span></p>
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
</template>

<script setup>
</script>

<style lang="scss" scoped>
.mainPage {
  width: 100%;
  height: 100vh;
  background-color: $color-primary;

  &__wrapper {
    padding: 10rem;

    & h1 {
      font-size: 20rem;
      font-weight: 900;
    }

    & h2 {
      font-size: 4rem;
      font-weight: 500;
      padding-left: 2rem;
      margin-top: -4rem;

      & span {
        color: $color-white;
      }
    }

    & p {
      width: 70%;
      padding-left: 2rem;
      margin-top: 2rem;
      font-size: 2rem;
      font-family: "Cabin", sans-serif;

      & span {
        color: $color-white;
      }
    }

    & div {
      display: flex;
      margin-top: 6rem;

      & div {
        flex: 10%;

        & img {
          opacity: 0.1;
        }
      }
    }
  }
}

.successSteps {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  background-color: $color-primary;
  padding: 2rem 10rem 4rem 10rem;

  &__stepOne,
  &__stepTwo,
  &__stepThree {
    flex: 28%;
    height: 20rem;
    background-color: $color-white;
    color: $color-black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      scale: 1.05;
    }

    & h4 {
      color: $color-primary;
      font-size: 14rem;
    }

    & span {
      font-weight: 800;
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
      gap: 2rem;

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
</style>