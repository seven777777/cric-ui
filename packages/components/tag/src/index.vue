<template>
    <span class="cric-tag">{{ text }}</span>
</template>

<script setup lang="ts" name="CTag">
const props = withDefaults(
    defineProps<{
        text: string
    }>(),
    {
        text: '标签'
    }
)
</script>

<style lang="scss" scoped>
.cric-tag {
    padding: 2px 20px;
    border-radius: 4px;
    background-color: sandybrown;
    color: white;
    box-sizing: border-box;
}
</style>
