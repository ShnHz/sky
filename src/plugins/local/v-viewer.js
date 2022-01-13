/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 10:03:24 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-06-03 10:16:41
 */

/*
 * https://github.com/fengyuanchen/viewerjs#options
 * 
 * v-viewer
 * v-viewer="{
 *   title:true,
 *   toolbar:true
 * }"
 */

import Vue from 'vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999,
        button: false,
        title: false
    }
})