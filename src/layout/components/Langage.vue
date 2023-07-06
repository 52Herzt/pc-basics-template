<template>
  <a-select v-model:value="localeLang" :options="langList" @change="changeLocale" />
</template>

<script setup>
import NProgress from 'nprogress'
import { getCurrentInstance, onMounted, ref } from 'vue'

import { useCommonStore } from '@/store'
import { langList } from '@/utils/variable'

const { proxy } = getCurrentInstance()
const commonStore = useCommonStore()

const LOCALE = localStorage.getItem('LOCALE')
const localeLang = ref(commonStore.locale)
if (LOCALE) {
  localeLang.value = LOCALE
} else {
  localStorage.setItem('LOCALE', commonStore.locale)
}

function changeLocale(val) {
  NProgress.start()
  proxy.$i18n.locale = val
  localStorage.setItem('LOCALE', val)

  setTimeout(() => {
    NProgress.done()
  }, 10)
}

onMounted(() => {
  changeLocale(localeLang.value)
})
</script>
