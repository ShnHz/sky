/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 09:59:02 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-01-14 21:43:53
 */

import cookies from 'vue-cookies'

// code 代码高亮
export default function(app) {
    app.config.globalProperties.$cookies = cookies
}