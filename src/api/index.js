/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:48:35 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-08-23 16:02:56
 */

/** 
 * api接口的统一出口
 */
// 接口地址
import api from '@/api/base';

// 通用模块接口
import common from '@/api/module/common';
// 用户模块接口
import user from '@/api/module/user';

// 导出接口
export default {
    api,
    common,
    user
}