import { defineStore } from 'pinia'

const commonStore = defineStore('common', {
  state: () => {
    return {
      sidebarCollapsed: false,
      // 默认值
      locale: 'en_US',
      themeColor: 'theme-1',
      themeLayout: 'layout-1',
    }
  },
  getters: {
    showSidebar: state => state.themeLayout === 'layout-1',
  },
})

export default commonStore
