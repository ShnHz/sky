/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 09:53:37 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-08-13 18:05:12
 */

/*
 * https://element.eleme.io/#/zh-CN
 */

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/css/element-variables.scss'


export function loadElementPlus(app) {
    app.use(ElementPlus)
}