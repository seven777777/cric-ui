<template>
    <div class="box">
        <h1>CricUI</h1>
        <div>
            Button：
            <c-button />
        </div>
        <div class="flex-align m-t10">
            PopoverDiy：
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
        <div class="flex-align m-t10">
            DatePlus：
            <c-date-plus />
        </div>
        <div class="flex-align m-t10">
            <svg id="svg" width="500" height="200">
                <g id="text" :transform="`skewX(${num})`"></g>
                <g id="text2" :transform="`skewX(${num})`">
                    <text x="0" y="120" fill="blue" font-size="40">克而瑞</text>
                    <circle cx="180" cy="150" r="50" />
                </g>
            </svg>
        </div>
        <div class="flex-align" style="width: 300px">
            <span style="flex-shrink: 0">倾斜度调整：{{ num }}</span>
            <el-slider class="m-l10" v-model="num" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import opentype from 'opentype.js'
const isShow = ref(false)
const num = ref(40)
const href = new URL('./font/my.ttf', import.meta.url).href
onMounted(() => {
    opentype.load(href, function (err: any, font: any) {
        if (err) {
            alert('Font could not be loaded: ' + err)
        } else {
            const path = font.getPath('克而瑞CRIC', 0, 72, 72)
            path.fill = 'red'
            document.getElementById('text')!.innerHTML = path.toSVG()
        }
    })
})
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
.m-l10 {
    margin-left: 10px;
}
</style>
