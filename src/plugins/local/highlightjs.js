/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 09:59:02 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-08-13 18:15:52
 */

import hljs from 'highlightjs'
import 'highlightjs/styles/atom-one-dark.css'

export function loadHighlightjs(app) {
    app.directive('highlightjs', {
        deep: true,
        mounted(el, binding) {
            // on first bind, highlight all targets
            var targets = el.querySelectorAll('code');
            var target;
            var i;

            for (i = 0; i < targets.length; i += 1) {
                target = targets[i];

                if (typeof binding.value === 'string') {
                    // if a value is directly assigned to the directive, use this
                    // instead of the element content.
                    target.textContent = binding.value;
                }

                hljs.highlightBlock(target);
            }
        },
        updated(el, binding) {
            // after an update, re-fill the content and then highlight
            var targets = el.querySelectorAll('code');
            var target;
            var i;

            for (i = 0; i < targets.length; i += 1) {
                target = targets[i];
                if (typeof binding.value === 'string') {
                    target.textContent = binding.value;
                    hljs.highlightBlock(target);
                }
            }
        },
    });
}

// code 代码高亮