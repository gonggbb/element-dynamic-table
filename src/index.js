const DEFAULT_FONT_CONFIG = {
  text: '', //文本
  fontSize: 14, //大小单位px
  font: localStorage.lang === 'zh' ? 'PuHuiZh' : 'PuHuiEn', //默认字体
  padding: 12 * 2, //表头的内距离，单位px
  sortWidth: 24, //排序宽度px
  deviation: 0, //偏差px
  extraWidth: 0, //格外值px
}
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')

/**
 * @description:宽度计算
 * @param {object|Element} fontConfig 内容|dom
 * @return {number} 宽度
 */
const calcWidth = fontConfig => {
  if (typeof fontConfig === 'object' && fontConfig instanceof Element) {
    return fontConfig.offsetWidth
  }
  fontConfig = { ...DEFAULT_FONT_CONFIG, ...fontConfig }
  const { text, font, fontSize, padding, sortWidth, deviation, extraWidth } = fontConfig
  const fontFamilyStr = getComputedStyle(document.documentElement).fontFamily
  const fontFamilyList = fontFamilyStr.split(',')
  const fontFamily = fontFamilyList.length ? fontFamilyList[0] : font //默认字体
  context.font = `${fontSize}px ${fontFamily}`
  const fillWidth = padding + sortWidth + deviation + extraWidth
  const fontWidth = context.measureText(text).width + fillWidth
  return Math.ceil(fontWidth)
}

/* 长到短排序 */
const sortByFontLength = (a, b) => b.length - a.length

/**
 * @description: 设置表头宽度;注意不支持多层嵌套表格
 * @param {Array} data 后台数据
 * @param {Array} headerList 表头
 * @param {Array} dynamicColumn 动态项
 * @param {Object} fontConfig 配置项
 */
const dynamicHeaderWidth = (options, fontConfig = { ...DEFAULT_FONT_CONFIG }) => {
  let { data, headerList, dynamicColumn } = options
  const columnMaxMap = {}
  // 计算最大文本长度
  dynamicColumn.forEach(prop => {
    const maxText = data.map(i => i[prop]).sort(sortByFontLength)[0]
    columnMaxMap[prop] = maxText
  })

  dynamicColumn.forEach(prop => {
    let header = headerList.find(i => i.prop === prop)
    if (header) {
      const { extraWidth, label, sortable } = header
      let minConfig = { ...DEFAULT_FONT_CONFIG, text: label } //最小配置
      if (!sortable) {
        //无排序
        minConfig.sortWidth = 0
        fontConfig.sortWidth = 0
      }
      if (extraWidth) {
        //列是否有额外宽度：操作图标
        minConfig.extraWidth = extraWidth
        fontConfig.extraWidth = extraWidth
      }
      const minWidth = calcWidth(minConfig) //最小宽度
      const maxText = columnMaxMap[prop]
      if (!maxText) {
        header.width = minWidth
        return
      }

      fontConfig.text = maxText
      let dynamicMaxWidth = calcWidth(fontConfig) //最大宽度
      header.width = Math.max(dynamicMaxWidth, minWidth)
    }
  })
}

export { dynamicHeaderWidth, calcWidth };
export default { dynamicHeaderWidth, calcWidth };