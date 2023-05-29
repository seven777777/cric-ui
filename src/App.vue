<template>
    <div class="box">
        <h1>CricUI</h1>
        <div>
            button：
            <c-button />
        </div>
        <div class="flex-align m-t10">
            CPopoverDiy：
            <el-popover placement="bottom-start" width="200" :transition="'el-zoom-in-top'" trigger="click" v-model:visible="isShow">
                <template #reference>
                    <c-arrow-btn :status="isShow" width="120px" :title="'选择城市'" preIcon="House">
                        <template #preIcon>
                            <el-icon><Search /></el-icon>
                        </template>
                    </c-arrow-btn>
                </template>
                <div>自定义内容</div>
            </el-popover>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)
</script>

<style lang="scss" scoped>
.box {
    width: 100vw;
    height: 100vh;
}
.m-t10 {
    margin-top: 10px;
}
.flex-align {
    display: flex;
    align-items: center;
}
</style>
