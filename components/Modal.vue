<template>
    <div class="modalWrapper">
        <dialog data-modal class="modal">
            <div>This is a modal</div>
            <button data-close-modal>close</button>
        </dialog>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const openModal = document.querySelector("[data-open-modal]")
    const modal = document.querySelector("[data-modal]")
    const closeModal = document.querySelector("[data-close-modal]")

    openModal.addEventListener("click", () => {
        modal.showModal()
    });

    closeModal.addEventListener("click", () => {
        modal.close()
    })
})
</script>

<style lang="scss" scoped>
.modalWrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    padding: 3rem 6rem;
}

div {
    margin-bottom: 10px;
    font-size: 20px;
}
</style>