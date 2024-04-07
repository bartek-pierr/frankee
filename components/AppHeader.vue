<template>
    <header class="mainHeader shadow-md">
        <div class="mainHeader__logoWrapper">
            <a href="/">Frankee.</a>
        </div>
        <ul class="mainHeader__navigationWrapper">
            <li>
                <NuxtLink to="/">Strona Główna</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/o-nas">O Nas</NuxtLink>
            </li>
            <li @mouseover="toggleMenu" class="dropdownEnabler">
                <NuxtLink to="/oferta">Oferta</NuxtLink>
                <div class="dropdownEnabler__dropdown shadow-md">
                    <a href="/oferta/branding">Branding</a>
                    <a href="/oferta/content">Content</a>
                    <a href="/oferta/socials">Socials</a>
                    <a href="/oferta/strony-www">Strony WWW</a>
                </div>
            </li>
            <li>
                <NuxtLink to="/realizacje">Realizacje</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/kontakt">Kontakt</NuxtLink>
            </li>
        </ul>
        <div class="mainHeader__socials">
            <a href="https://www.facebook.com/profile.php?id=100095526155357" target="_blank"><img src="../assets/images/facebook-icon.png" alt=""></a>
            <a href="https://www.instagram.com/frankee_minimal/" target="_blank"><img src="../assets/images/instagram-icon.png" alt=""></a>
            <a href="https://www.tiktok.com/@frankee_minimal" target="_blank"><img src="../assets/images/tiktok-icon.png" alt=""></a>
        </div>
        <AppButton @click="showAlert()" buttonText="Wycena" class="shadow-md" />
    </header>
</template>

<script setup>

const toggleMenu = () => {
    const dropdown = document.querySelector('.dropdownEnabler__dropdown');
    const dropdownEnabler = document.querySelector('.dropdownEnabler');
    dropdown.style.display = 'flex';

    dropdownEnabler.addEventListener('mouseleave', closeMenuOnMouseLeave);
}

const closeMenuOnMouseLeave = () => {
    const dropdown = document.querySelector('.dropdownEnabler__dropdown');
    dropdown.style.display = 'none';
}
</script>

<style lang="scss" scoped>
.mainHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 100px;
    height: 6rem;
    background-color: $color-white;
    z-index: 1000;
    position: fixed;

    &__logoWrapper a {
        font-family: "Open Sans", sans-serif;
        color: $color-black;
        font-weight: 900;
        font-size: 3rem;
        text-decoration: none;
    }

    &__navigationWrapper {
        height: 100%;
        list-style-type: none;
        display: flex;
        gap: 2rem;

        & .router-link-exact-active {
            border-bottom: 0.4rem solid $color-primary;
            padding-bottom: 0.5rem;
        }

        & li a,
        & li p {
            text-decoration: none;
            text-transform: capitalize;
            font-weight: 600;
            font-size: 1.4rem;
            color: $color-black;
            cursor: pointer;
        }


        & li {
            display: flex;
            align-items: center;
            padding: 1rem;
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: $color-primary;
            }
        }
    }

    &__socials {
        display: flex;
        gap: 1rem;

        & a {
            width: 3.6rem;
            height: 3.6rem;
            transition: all 0.3s ease-out;

            &:hover {
                scale: 1.2;
            }
        }

        & img {
            height: 100%;
            width: 100%;
        }
    }
}

.dropdownEnabler {
    position: relative;

    &__dropdown {
        background-color: $color-white;
        position: absolute;
        top: 6rem;
        left: 0;
        display: flex;
        flex-direction: column;
        padding: 1rem 5rem 1rem 1rem;
        gap: 1rem;
        display: none;
        animation: fadeInOut 0.5s ease-in-out forwards;

        & a {
            padding-bottom: 0.5rem;
            text-wrap: nowrap;
            height: 100%;
            width: 100%;

            &:hover {
                color: $color-primary;
            }
        }
    }
}

/* Definicja animacji */
@keyframes fadeInOut {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>