<template>
    <el-popover placement="bottom-start" width="200" :transition="'el-zoom-in-top'" trigger="click" v-model:visible="isShow">
        <!-- <popover-btn slot="reference" :status="isShow" width="120px" :title="'选择城市'" /> -->
        <template #reference>
            <c-popover-btn :status="isShow" width="120px" :title="'选择城市'"></c-popover-btn>
        </template>
        <div>自定义下拉控件内容</div>
    </el-popover>
</template>

<script setup lang="ts" name="CPopoverDiy">
import { ref } from 'vue'

const props = withDefaults(
    defineProps<{
        text: string
    }>(),
    {
        text: 'cric-button'
    }
)
let isShow = ref(false)
</script>

<style lang="scss" scoped>
.cric-button {
    border: 0;
    padding: 0 15px;
    height: 30px;
    border-radius: 4px;
    background-color: $primaryColor;
    cursor: pointer;
}
</style>
