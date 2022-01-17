/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 09:59:02 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-01-17 14:33:16
 */

import cookies from 'vue-cookies'

// code 代码高亮
export default function(app) {
    cookies.config('7d')
    app.config.globalProperties.$cookies = cookies
}