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
    height: 30px;
    border-radius: 4px;
    background-color: palegreen;
    cursor: pointer;
}
</style>
