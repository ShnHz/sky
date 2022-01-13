/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 11:23:58 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2020-06-01 14:07:31
 */

export default {
    /**
     * @param  {str} 
     * @param  {type}
     *       type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
     * @return {String}
     */
    mixin_changeCase(str, type) {
        type = type || 4
        switch (type) {
            case 1:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

                });
            case 2:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
                });
            case 3:
                return str.split('').map(function (word) {
                    if (/[a-z]/.test(word)) {
                        return word.toUpperCase();
                    } else {
                        return word.toLowerCase()
                    }
                }).join('')
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                return str;
        }
    },
    /**
     * 检测密码强度
     * @param  {str} 
     */
    mixin_checkPwd(str) {
        var Lv = 0;
        if (str.length < 6) {
            return Lv
        }
        if (/[0-9]/.test(str)) {
            Lv++
        }
        if (/[a-z]/.test(str)) {
            Lv++
        }
        if (/[A-Z]/.test(str)) {
            Lv++
        }
        if (/[\.|-|_]/.test(str)) {
            Lv++
        }
        return Lv;
    },
    /**
     * 过滤html代码(把<>转换)
     * @param  {str} 
     */
    mixin_filterTag(str) {
        str = str.replace(/&/ig, "&amp;");
        str = str.replace(/</ig, "&lt;");
        str = str.replace(/>/ig, "&gt;");
        str = str.replace(" ", "&nbsp;");
        return str;
    },
    /**
     * 返回字符串长度，汉字计数为2
     * @param  {str} 
     */
    mixin_strLength(str) {
        var a = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255)
                a += 2; //按照预期计数增加2
            else
                a++;
        }
        return a;
    },
    /**
     * 去除字符串中some后的字符串
     * @param  {str} 
     * @param  {some} 
     * @param  {position}
     */
    mixin_strRemoveSome(str, some, position = true) {
        let text = str
        for (let i = 0; i < some.length; i++) {
            if (text.indexOf(some[i]) > -1) {
                if (position) {
                    text = text.substring(0, text.indexOf(some[i]))
                } else {
                    text = text.substring(text.indexOf(some[i]), text.length)
                }
            }
        }

        return text
    },
    /**
     * 特殊字符转义
     * @param  {str} 
     */
    mixin_filter(str) {
        str += '' // 隐式转换
        str = str.replace(/%/g, '%25')
        str = str.replace(/\+/g, '%2B')
        str = str.replace(/ /g, '%20')
        str = str.replace(/\//g, '%2F')
        str = str.replace(/\?/g, '%3F')
        str = str.replace(/&/g, '%26')
        str = str.replace(/\=/g, '%3D')
        str = str.replace(/#/g, '%23')
        return str
    },
    /**
     * 获取url参数并转为对象
     * @param  {str} 
     */
    mixin_getUrlData(str) {
        let params = str.split("?")[1].split("&")
        let obj = {}
        params.map(v => obj[v.split("=")[0]] = v.split("=")[1])

        return obj
    }
}