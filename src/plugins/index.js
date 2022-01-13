/*
 * @Author: sanghangning 
 * @Date: 2021-08-13 18:02:35 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-08-13 18:26:18
 */
import {
  loadElementPlus
} from '@/plugins/local/element-plus.js'
import {
  loadHighlightjs
} from '@/plugins/local/highlightjs.js'
import {
  loadAxios
} from '@/plugins/local/axios.js'

export function loadAllPlugins(app) {
  // axios
  loadAxios(app)
  // element-plus
  loadElementPlus(app)

  // highlightjs
  if (
    import.meta.env.DEV) {
    loadHighlightjs(app)
  }
}