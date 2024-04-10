<template>
    <footer>
        <section class="footer">
            <div class="footer__contact">
                <NuxtLink to="/">Frankee.</NuxtLink>
                <a href="tel:665865789"><span>tel. <span id="footerPhoneNumber">{{ data.config.phone }}</span></span></a>
                <a href="mailto:hello@frankee.com.pl"><span>{{ data.config.mail }}</span></a>
            </div>
            <div class="footer__navigation">
                <h4>Nawigacja</h4>
                <NuxtLink to="/">Strona Główna</NuxtLink>
                <NuxtLink to="/o-nas">O Nas</NuxtLink>
                <NuxtLink to="/oferta">Oferta</NuxtLink>
                <NuxtLink to="/realizacje">Realizacje</NuxtLink>
                <NuxtLink to="/kontakt">Kontakt</NuxtLink>
            </div>
            <div class="footer__offer">
                <h4>Oferta</h4>
                <NuxtLink to="/oferta/branding">Branding</NuxtLink>
                <NuxtLink to="/oferta/content">Content</NuxtLink>
                <NuxtLink to="/oferta/socials">Socials</NuxtLink>
                <NuxtLink to="/oferta/strony-www">Strony WWW</NuxtLink>
            </div>
            <div class="footer__socials">
                <h4>Obserwuj nas</h4>
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">TikTok</a>
            </div>
        </section>
        <div class="footer__credits">
            Copyright © Frankee | Realizacja: Bartek Pierr
        </div>
    </footer>
</template>

<script setup>
const {data} = await useFetch('/api/frankeeData')
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
    padding: 4rem 10rem;
    background-color: $color-black;
    color: $color-white;

    &__contact, &__navigation, &__offer, &__socials {
        & a:hover {
            color: $color-primary;
        }
    }

    &__contact {
        display: flex;
        flex-direction: column;

        & a {
            margin-bottom: 1rem;
            text-decoration: none;
            color: $color-primary;
            font-size: 1.8rem;
            font-weight: 800;

            & span {
                color: $color-white;
                font-size: 1.6rem;
                font-weight: 400;

                &:hover {
                    color: $color-primary;
                }
            }
        }
    }

    &__navigation {
        display: flex;
        flex-direction: column;

        & h4 {
            color: $color-primary;
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        & a {
            text-decoration: none;
            color: $color-white;
            font-size: 1.6rem;
            font-weight: 400;
        }
    }

    &__offer {
        display: flex;
        flex-direction: column;

        & h4 {
            color: $color-primary;
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        & a {
            text-decoration: none;
            color: $color-white;
            font-size: 1.6rem;
            font-weight: 400;
        }
    }

    &__socials {
        display: flex;
        flex-direction: column;

        & h4 {
            color: $color-primary;
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        & a {
            text-decoration: none;
            color: $color-white;
            font-size: 1.6rem;
            font-weight: 400;
        }
    }

    &__credits {
        display: flex;
        justify-content: flex-end;
        background-color: $color-white;
        color: $color-black;
        padding: 1rem 10rem;
    }
}
</style>