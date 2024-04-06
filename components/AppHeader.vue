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
            <li @click="toggleMenu" class="dropdownEnabler">
                <p>Oferta</p>
                <div class="dropdownEnabler__dropdown">
                    <a href="/oferta">Oferta</a>
                    <a href="/oferta/branding">Branding</a>
                    <a href="/oferta/content">Content</a>
                    <a href="/oferta/socials">Socials</a>
                    <a href="/oferta/strony-www">Strony WWW</a>
                </div>
            </li>
            <li>
                <NuxtLink to="realizacje">Realizacje</NuxtLink>
            </li>
            <li>
                <NuxtLink to="kontakt">Kontakt</NuxtLink>
            </li>
        </ul>
        <div class="mainHeader__socials">
            <a href="https://www.facebook.com/profile.php?id=100095526155357" target="_blank"><img src="../assets/images/facebook-icon.png" alt=""></a>
            <a href="https://www.instagram.com/frankee_minimal/" target="_blank"><img src="../assets/images/instagram-icon.png" alt=""></a>
            <a href="https://www.tiktok.com/@frankee_minimal" target="_blank"><img src="../assets/images/tiktok-icon.png" alt=""></a>
        </div>
        <AppButton @click="showAlert()" buttonText="Wycena" />
    </header>
</template>

<script setup>
const toggleMenu = () => {
    const dropdown = document.querySelector('.dropdownEnabler__dropdown')
    const dropdownEnabler = document.querySelector('.dropdownEnabler')
    dropdown.style.display = 'flex'

    document.addEventListener('click', closeMenuOnClickOutside);
}

const closeMenuOnClickOutside = (event) => {
    const dropdown = document.querySelector('.dropdownEnabler__dropdown');
    const dropdownEnabler = document.querySelector('.dropdownEnabler');

    if (!dropdown.contains(event.target) && !dropdownEnabler.contains(event.target)) {
        dropdown.style.display = 'none';
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
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
        width: 16rem;
        height: 21rem;
        background-color: $color-white;
        position: absolute;
        bottom: -21rem;
        left: 0;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        display: none;

        & a {
            border-bottom: 0.1rem solid $color-primary;
            padding-bottom: 0.5rem;

            &:hover {
                color: $color-primary;
            }
        }
    }
}
</style>