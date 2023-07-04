import { generate } from '@ant-design/colors/dist/index.js'
import client from 'webpack-theme-color-replacer/client'

export default {
  getAntdSerials(color) {
    // 淡化（即less的tint）
    const lightens = new Array(9).fill().map((t, i) => {
      return client.varyColor.lighten(color, i / 10)
    })
    const colorPalettes = generate(color)
    const rgb = client.varyColor.toNum3(color.replace('#', '')).join(',')
    return lightens.concat(colorPalettes).concat(rgb)
  },
  // 运行时更改主题颜色
  changeColor(newColor) {
    var options = {
      newColors: this.getAntdSerials(newColor),
      changeUrl(cssUrl) {
        return `/${cssUrl}`
      },
    }
    return client.changer.changeColor(options, Promise)
  },
}
