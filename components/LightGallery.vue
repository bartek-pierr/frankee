<template>
    <main class='gallery'>
        <div class='item' data-pos='0'><img src='https://source.unsplash.com/qvEI30ydO_w'></div>
        <div class='item' data-pos='1'><img src='https://source.unsplash.com/9KDuSi7dJv4'></div>
        <div class='item' data-pos='2'><img src='https://source.unsplash.com/d5PYB17O9jE'></div>
        <div class='item' data-pos='3'><img src='https://source.unsplash.com/Um9AkOiIDcU'></div>
        <div class='item' data-pos='4'><img src='https://source.unsplash.com/YTk8tO3PGdA'></div>
    </main>
</template>

<script setup>
// function init(e) {
//     if (!e.target.closest('.item')) return;
//     let hero = document.querySelector('div[data-pos="0"]');
//     let target = e.target.parentElement;
//     [target.dataset.pos, hero.dataset.pos] = [hero.dataset.pos, target.dataset.pos];
// }

// window.addEventListener('click', init, false);
</script>

<style lang="scss" scoped>
.gallery {
    position: relative;
    width: 100vw;
    height: 60vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    &:hover :not(div[data-pos='0'], img) {
        cursor: pointer;
    }

    & .item {
        overflow: hidden;
        transition: transform 0.9s, width 0.9s, height 0.9s;

        & img {
            width: 100%;
            height: 100%;
        }
    }

    & div[data-pos='0'] {
        height: inherit;
        z-index: 10;
    }
}

div[data-pos='0'] {
    grid-area: 1 / 1 / 3 / 3;
}

div[data-pos='1'] {
    grid-area: 1 / 3 / 2 / 4;
}

div[data-pos='2'] {
    grid-area: 1 / 4 / 2 / 5;
}

div[data-pos='3'] {
    grid-area: 2 / 3 / 3 / 4;
}

div[data-pos='4'] {
    grid-area: 2 / 4 / 3 / 5;
}

@media (width < 800px) {
    .gallery {
        width: 405px;
        height: 660px;

        & .item {
            width: 200px;
            height: 150px;
        }

        & div[data-pos='0'] {
            width: inherit;
            height: 350px;
            z-index: 10;
        }
    }

    div[data-pos='0'] {
        transform: translate(0, 0);
    }

    div[data-pos='1'] {
        transform: translate(0, 355px);
    }

    div[data-pos='2'] {
        transform: translate(0, 510px);
    }

    div[data-pos='3'] {
        transform: translate(205px, 355px);
    }

    div[data-pos='4'] {
        transform: translate(205px, 510px);
    }
}
</style>