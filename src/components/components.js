/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:48:06 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-02-11 12:10:13
 */

import Empty from '@/components/common/Empty.vue'
import UrlParam from '@/components/common/UrlParam.vue'

import SubTitleWrap from '@/components/layout/SubTitleWrap.vue'

import PluginsSvgIcon from '@/components/plugins/PluginsSvgIcon.vue'

const components = {
    'Empty': Empty,
    'UrlParam': UrlParam,
    'SubTitleWrap': SubTitleWrap,
    'PluginsSvgIcon': PluginsSvgIcon,
}

export function loadAllComponents(app) {
    for (let key in components) {
        app.component(key, components[key]);
    }
}