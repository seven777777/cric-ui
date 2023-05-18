<template>
    <button class="cric-button">{{ text }}</button>
</template>

<script setup lang="ts" name="CButton">
const props = withDefaults(
    defineProps<{
        text: string
    }>(),
    {
        text: 'cric-button'
    }
)
</script>

<style lang="scss" scoped>
.cric-button {
    border: 0;
    padding: 0 15px;
    height: 30px;
    border-radius: 4px;
    background-color: palegreen;
    cursor: pointer;
}
</style>
