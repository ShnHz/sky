/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:48:06 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-05-11 15:47:40
 */

import Empty from '@/components/common/Empty.vue'
import Image from '@/components/common/Image.vue'
import UrlParam from '@/components/common/UrlParam.vue'

import SubTitleWrap from '@/components/layout/SubTitleWrap.vue'

import PluginsSvgIcon from '@/components/plugins/PluginsSvgIcon.vue'

const components = {
    Empty,
    Image,
    UrlParam,
    SubTitleWrap,
    PluginsSvgIcon,
}

export function loadAllComponents(app) {
    for (let key in components) {
        app.component(key, components[key]);
    }
}