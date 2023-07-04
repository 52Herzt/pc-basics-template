<template>
  <a-config-provider :locale="getLocaleConfig">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </a-config-provider>
</template>

<script setup>
import enUS from 'ant-design-vue/es/locale-provider/en_US'
import frFR from 'ant-design-vue/es/locale-provider/fr_FR'
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN'
import { computed } from 'vue'

import { useCommonStore } from '@/store'
import { chengeTheme } from '@/style/theme/theme'

const commonStore = useCommonStore()

const themeColor = localStorage.getItem('THEME_COLOR')
const themeLayout = localStorage.getItem('THEME_LAYOUT')
if (themeColor && themeLayout) {
  chengeTheme(themeColor, themeLayout)
  commonStore.themeLayout = themeLayout
} else {
  localStorage.setItem('THEME_COLOR', commonStore.themeColor)
  localStorage.setItem('THEME_LAYOUT', commonStore.themeLayout)
}

const getLocaleConfig = computed(() => {
  switch (commonStore.locale) {
    case 'zh_CN': {
      return zhCN
    }
    case 'en_US': {
      return enUS
    }
    case 'fr_FR': {
      return frFR
    }
    default: {
      return zhCN
    }
  }
})
</script>
