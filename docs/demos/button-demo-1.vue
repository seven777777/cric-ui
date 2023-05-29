<template>
    <el-popover placement="bottom-start" width="200" :transition="'el-zoom-in-top'" trigger="click" v-model:visible="isShow">
        <template #reference>
            <c-arrow-btn :status="isShow" width="120px" :title="'选择城市'" preIcon="House" />
        </template>
        <div>自定义内容</div>
    </el-popover>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)
</script>
