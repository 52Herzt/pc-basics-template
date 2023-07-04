<template>
  <span>
    <IconButton name="theme" @click="themeVisible = !themeVisible" />
    <a-drawer
      v-model:visible="themeVisible"
      :title="`${$t('theme_title')}`"
      width="328"
      @afterVisibleChange="visibleChange"
    >
      <a-divider class="mt-4">{{ $t('theme_layout') }}</a-divider>
      <div class="flex-box-row">
        <a-tooltip v-for="(it, key) in modelList" :key="key" placement="bottom">
          <template #title>
            <span>{{ $t(it.title) }}</span>
          </template>
          <div
            :class="['nav-item', `nav-item-${key}`, { active: themeLayout === it.key }]"
            @click="selTheme(it.key, 'layout')"
          />
        </a-tooltip>
      </div>

      <a-divider>{{ $t('theme_color') }}</a-divider>
      <a-tag v-for="(it, key) in themes" :key="key" :color="it.primary" @click="() => selTheme(it.name)">
        <i v-show="it.name === themeColor" class="iconfont icon-sel" />
      </a-tag>
      <a-button class="full-width mt-28" type="primary" @click="toggleTheme">{{ $t('handle_save') }}</a-button>
    </a-drawer>
  </span>
</template>

<script setup>
import { ref } from 'vue'

import { useCommonStore } from '@/store'
import { chengeTheme, themes } from '@/style/theme/theme'

const commonStore = useCommonStore()

const THEME_COLOR = localStorage.getItem('THEME_COLOR')
const THEME_LAYOUT = localStorage.getItem('THEME_LAYOUT')

const themeVisible = ref(false)
const themeColor = ref(THEME_COLOR)
const oldThemeColor = ref(THEME_COLOR)

const themeLayout = ref(THEME_LAYOUT)
const oldThemeLayout = ref(THEME_LAYOUT)
const modelList = [
  {
    title: 'theme_layout_title_1',
    key: 'layout-1',
  },
  {
    title: 'theme_layout_title_2',
    key: 'layout-2',
  },
]

function selTheme(val, mode = 'color') {
  if (mode === 'color') {
    themeColor.value = val
  } else {
    themeLayout.value = val
  }
}
function toggleTheme() {
  oldThemeColor.value = themeColor.value
  oldThemeLayout.value = themeLayout.value

  commonStore.themeLayout = themeLayout.value
  chengeTheme(themeColor.value, themeLayout.value)
  themeVisible.value = false
}

function visibleChange() {
  themeColor.value = oldThemeColor.value
  themeLayout.value = oldThemeLayout.value
}

addEventListener('resize', () => {
  if (themeVisible.value) {
    themeVisible.value = false
  }
})
</script>

<style lang="less" scoped>
.ant-tag {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 5px;
  cursor: pointer;

  > .iconfont {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.nav-item {
  position: relative;
  width: 56px;
  height: 50px;
  margin-right: 16px;
  background-color: #f0f2f5;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(20, 16, 16, 0.2);
  cursor: pointer;

  &.active {
    border-color: @primary-color;
  }

  &.nav-item::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 17px;
    background-color: #273352;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    content: '';
  }

  &.nav-item::after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 12px;
    background-color: #fff;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    content: '';
  }

  &.nav-item-0::before {
    z-index: 1;
  }
  &.nav-item-1::after {
    background-color: #273352;
    border-top-left-radius: inherit;
    border-bottom-right-radius: 0;
  }

  &.nav-item-1::before {
    display: none;
  }
}
</style>
