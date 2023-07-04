<template>
  <a-layout>
    <Sidebar v-if="commonStore.showSidebar" />
    <a-layout>
      <Header />
      <a-layout-content>
        <div v-if="pending" class="loading">
          <a-spin />
        </div>
        <slot v-else>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" class="content" />
            </transition>
          </router-view>
        </slot>
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue'

import { useCommonStore } from '@/store'

import { Footer, Header, Sidebar } from './components'
const commonStore = useCommonStore()

const pending = ref(false)
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.ant-layout-content {
  display: flex;
  flex-direction: column;
  background: #fafafa;
}
.content {
  flex: 1;
  margin: 16px;
  padding: 16px;
  background: #fff;
  border-radius: 5px;
}
</style>
