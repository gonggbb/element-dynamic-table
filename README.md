# element-dynamic-table

解决动态设置表格宽度

## 使用

```
npm install element-dynamic-table
import { calcWidth ,dynamicHeaderWidth }  from 'element-dynamic-table';


```
## vue2的使用示例
```
// main.js
import registerCenter from "@/plugin/registerCenter.js"
Vue.use(registerCenter)

//src创建plugin/registerCenter.js
export default {
  install(Vue) {
    Vue.prototype.$DynamicHeaderWidth  = dynamicHeaderWidth
    Vue.prototype.$CalcWidth  = calcWidth
  },
}
```

## 配置项

|key|type|description|
|--|--|--|
|text|String|文本|
|fontSize|Number|大小 14px|
|font|String|默认字体 html 根元素的字体|
|padding|Number|表头的内距离，12 \* 2px|
|sortWidth|Number|排序宽度 24px|
|deviation|Number|偏差 0px|
|extraWidth|Number|格外值 0px|

```

const DEFAULT_FONT_CONFIG = {
text: '', //文本
fontSize: 14, //大小单位 px
font: localStorage.lang === 'zh' ? 'PuHuiZh' : 'PuHuiEn', //默认字体
padding: 12 \* 2, //表头的内距离，单位 px
sortWidth: 24, //排序宽度 px
deviation: 0, //偏差 px
extraWidth: 0, //格外值 px
}

```

## 使用方法

### calcWidth()

参数项

- @description:宽度计算
- @param {object|Element} fontConfig 内容|dom
- @return {number} 宽度

vue2 CalcWidth 使用示例

```
 computed: {
    actionBtnWidth(){
      let options = {
        text:this.$t('button.Issued')+this.$t('button.edit')+this.$t('button.delete'),
        extraWidth: 10,
      }
      return this.$CalcWidth(options)
    },
  },
```

### dynamicHeaderWidth(配置项) 
   获取表格的动态宽度

   dynamicHeaderWidth = (options, fontConfig = { ...DEFAULT_FONT_CONFIG })  
   let { data, headerList, dynamicColumn } = options

参数项

- @description: 设置表头宽度;注意不支持多层嵌套表格
- @param {Array} data 后台数据
- @param {Array} headerList 表头
- @param {Array} dynamicColumn 动态项
- @param {Object} fontConfig 配置项

dynamicHeaderWidth 使用示例

```
headerList = [
  {label: this.$t('th.timeout'),prop: 'address', width: '150',sortable: true ,extraWidth:30},
]
data = [
  {address:'给你一个地址',},
  {address:'给你一个地址,给你一个地址,',},
  {address:'给你一个地址,给你一个地址,给你一个地址,给你一个地址,',}
]
dynamicColumn = ['address']

```
headerList的(prop=address)的width： 有**最长的文本**的长度；没有就是**地址**字符串的长度

