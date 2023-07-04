<template>
  <a-layout-header class="flex-box-row flex-between">
    <div v-if="commonStore.showSidebar">
      <MenuUnfoldOutlined v-if="commonStore.sidebarCollapsed" class="ft-size-l" @click="changeCollapsed" />
      <MenuFoldOutlined v-else class="ft-size-l" @click="changeCollapsed" />
    </div>

    <Navigator v-if="!commonStore.showSidebar" class="flex-item" />

    <div class="lang pull-right">
      <Langage />
      <ToggleTheme />
    </div>
  </a-layout-header>
</template>

<script setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'

import { useCommonStore } from '@/store'

import Langage from './Langage.vue'
import Navigator from './Navigator.vue'
import ToggleTheme from './ToggleTheme.vue'

const commonStore = useCommonStore()

function changeCollapsed() {
  commonStore.sidebarCollapsed = !commonStore.sidebarCollapsed
}
</script>

<style lang="less" scoped>
.lang {
  .ant-select {
    width: 120px;
  }
}
</style>
