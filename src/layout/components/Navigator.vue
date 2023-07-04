<template>
  <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal">
    <a-menu-item v-for="it in menuList" :key="it.key" @click="toPage(it.route)">
      <template #icon>
        <i :class="`iconfont ${it.icon}`" />
      </template>
      {{ $t(it.title) }}
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { menuList } from '@/utils/variable'

const router = useRouter()

const selectedKeys = ref(['1'])

function toPage(route) {
  router.push(route)
}
</script>
