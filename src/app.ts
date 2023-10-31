/*
 * @Author: 农村高富帅
 * @Date: 2023-10-31 17:32:46
 * @LastEditors: 农村高富帅
 * @LastEditTime: 2023-10-31 20:07:10
 * @FilePath: /guess/src/app.ts
 * @Description: 
 * @mail: gaozemin0509@gmail.com
 */
import { createApp } from 'vue'
import './app.scss'
import { createUI } from 'taro-ui-vue3'

// 引用全部组件样式
import 'taro-ui-vue3/dist/style/index.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
// 引用全部组件
const tuv3 = createUI()
App.use(tuv3)

export default App
