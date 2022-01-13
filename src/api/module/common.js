/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:48:41 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-08-23 16:02:31
 */

import base from '../base'; // 导入接口域名列表

const api = {
    // 上传文件
    fileUpload(params) {
        return window.$vueApp.config.globalProperties.$http.post(`${base.api_monitor}/file_upload/`, params, {
            nprogress: false
        });
    },
    // 获取App排行榜搜索提示
    getAppRankRecom(params) {
        return window.$vueApp.config.globalProperties.$http.get(`${base.api}/appstore/elk_search_results/`, {
            params: params,
            nprogress: false
        });
    }
}

export default api;