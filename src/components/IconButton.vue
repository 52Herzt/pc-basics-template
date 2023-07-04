<template>
  <i :class="`iconfont icon-${name}`" :style="`font-size:${fontSize}px; color:${color}`" />
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
  fontSize: {
    type: [String, Number],
    default: '24',
  },
  color: {
    type: String,
    default: '#333',
  },
})
</script>

<style lang="less" scoped>
.iconfont {
  margin: 0 4px;
  padding: 6px;
  vertical-align: bottom;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #efefef;
  }
}
</style>
