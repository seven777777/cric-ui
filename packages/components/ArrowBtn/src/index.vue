<template>
    <div class="cric-arrow-btn" :style="{ width: width, height: height }">
        <div class="title-box">
            <div class="pre-arrow-box" v-if="$slots.preIcon || preIcon">
                <slot name="preIcon">
                    <el-icon v-if="preIcon"><component :is="preIcon"></component></el-icon>
                </slot>
            </div>
            <span class="title" :title="title">{{ title }}</span>
        </div>
        <el-icon :class="['arrow', status ? 'arrow_up_amt' : 'arrow_down_amt']"><ArrowDown /></el-icon>
    </div>
</template>

<script setup lang="ts" name="CArrowBtn">
const props = withDefaults(
    defineProps<{
        status?: boolean // 状态 ——对应箭头状态
        title: string
        width?: string // 默认自适应宽度，可设置固定宽度
        height?: string
        preIcon?: string //前面的icon
    }>(),
    {
        status: false,
        title: '请选择',
        width: 'auto',
        height: '28px',
        preIcon: ''
    }
)
</script>

<style lang="scss" scoped>
.cric-arrow-btn {
    cursor: pointer;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 7px;
    font-size: 12px;
    .title-box {
        display: flex;
        align-items: center;
        padding-right: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .arrow {
        font-size: 12px;
        color: #9b9b9b;
        flex-shrink: 0;
    }
}
.arrow_up_amt {
    transform: rotate(-180deg);
    transition: 300ms ease;
}

.arrow_down_amt {
    transform: rotate(0);
    transition: 300ms ease;
}
.pre-arrow-box {
    display: flex;
    align-items: center;
    margin-right: 5px;
}
</style>
