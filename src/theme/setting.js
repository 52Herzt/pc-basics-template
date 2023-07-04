import NProgress from 'nprogress'

import themeColor from './themeColor.js'

// 主题切换
const updateTheme = newPrimaryColor => {
  NProgress.start()
  themeColor.changeColor(newPrimaryColor).finally(() => {
    NProgress.done()
  })
}

export { updateTheme }
