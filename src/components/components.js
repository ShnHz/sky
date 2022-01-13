/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:48:06 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-08-23 17:54:49
 */

import Empty from '@/components/common/Empty.vue'
import UrlParam from '@/components/common/UrlParam.vue'
import SvgIcon from '@/components/common/SvgIcon.vue'

import TheTitle from '@/components/layout/Title.vue'

const components = {
    'Empty': Empty,
    'UrlParam': UrlParam,
    'SvgIcon':SvgIcon,

    'TheTitle': TheTitle
}

export function loadAllComponents(app) {
    for (let key in components) {
        app.component(key, components[key]);
    }
}