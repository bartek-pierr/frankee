<template>
    <div class="error">
        <p class="erros__status">{{ error.statusCode }}</p>
        <h2 class="error__title">Ooops.</h2>
        <p class="error__message">{{ error.message }}</p>
        <AppButton @click="handleClearError" buttonText="Strona Główna" />
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => {
    clearError({ redirect: '/' })
}
</script>

<style lang="scss" scoped></style>