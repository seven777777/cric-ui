<template>
    <span class="cric-icon">{{ text }}</span>
</template>

<script setup lang="ts" name="CIcon">
const props = withDefaults(
    defineProps<{
        text: string
    }>(),
    {
        text: 'icon-test'
    }
)
</script>

<style lang="scss" scoped>
.cric-icon {
    padding: 2px 20px;
    border-radius: 4px;
    background-color: blue;
    color: white;
    box-sizing: border-box;
}
</style>
