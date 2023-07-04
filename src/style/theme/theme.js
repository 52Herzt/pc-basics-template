import shared from '@/style/theme/theme.module.less'
import { updateTheme } from '@/theme/setting'

const THEMES_MAPPING = ['name', 'primary']
const THEMES_KEY = ['theme-main-color', 'theme-minor-color', 'theme_base_color']

export const themes = shared.themes?.split(',').map(it =>
  it
    .split(' ')
    .filter(it => it)
    .reduce(
      (accr, cur, index) => {
        if (index < 2) {
          accr[THEMES_MAPPING[index]] = cur
        } else {
          accr.colors.push(cur)
        }
        return accr
      },
      { colors: [] }
    )
)

// 动态修改CSS变量值，切换自定义主题配色
export const chengeTheme = function (themeColor, themeLayout) {
  const curTheme = themes.find(it => it.name === themeColor)
  const arr = [curTheme.primary, ...curTheme.colors]

  arr.forEach((color, index) => {
    document.documentElement.style.setProperty(`--${THEMES_KEY[index]}`, color)
  })

  localStorage.setItem('THEME_COLOR', themeColor)
  localStorage.setItem('THEME_LAYOUT', themeLayout)
  updateTheme(curTheme.primary)
}
