/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:48:06 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-05-12 10:34:45
 */

import Empty from '@/components/common/Empty.vue'
import Image from '@/components/common/Image.vue'
import NoPermisssions from '@/components/common/NoPermisssions.vue'
import UrlParam from '@/components/common/UrlParam.vue'

import SubTitleWrap from '@/components/layout/SubTitleWrap.vue'

import PluginsSvgIcon from '@/components/plugins/PluginsSvgIcon.vue'

const components = {
    Empty,
    NoPermisssions,
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