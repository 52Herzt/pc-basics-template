<template>
  <a-layout-sider class="sider" width="248" :collapsed="sidebarCollapsed">
    <div class="logo">
      <img src="../../assets/logo.png" :class="{ smallLogo: sidebarCollapsed }" alt="logo" />
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu-item v-for="it in menuList" :key="it.key" @click="toPage(it.route)">
        <template #icon>
          <i :class="`iconfont ${it.icon}`" />
        </template>
        {{ $t(it.title) }}
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useCommonStore } from '@/store'
import { menuList } from '@/utils/variable'

const commonStore = useCommonStore()
const { sidebarCollapsed } = storeToRefs(commonStore)

const router = useRouter()

const selectedKeys = ref(['1'])

function toPage(route) {
  router.push(route)
}
</script>

<style lang="less" scoped>
.sider {
  border-right: 1px solid #f0f0f0;
}

.ant-menu-item-icon {
  font-size: @font-size-xl;
}

.logo {
  text-align: center;
  img {
    width: 140px;
    padding: 50px 0;
  }

  .smallLogo {
    width: 35px;
    padding: 30px 0;
  }
}
</style>
