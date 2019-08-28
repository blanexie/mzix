import {
    markdown
} from 'markdown'

import {
    nanoid
} from 'nanoid'

/**
 * 构造方法传入的参数都是 经过行处理的直接可以转换成HTML的
 */
class Line {
    constructor(lineStr) {
        if (lineStr !== null || lineStr !== undefined) {
            this.lineStr = lineStr;
            let lineDOM = markdown.toHTML(lineStr)
            if (lineDOM == '') {
                this.dom = '<p>' + lineStr + '</p>'
                this.attr = {
                    id: await nanoid(10),
                    contenteditable: true
                }
            } else {
                this.dom = lineDOM
                this.attr = {
                    id: await nanoid(10),
                    contenteditable: true,
                    mark: true
                }
            }
        }
    }

    toHTML() {
        if (this.dom !== undefined) {
            let dom = document.createElement(this.dom);
            for (let key in this.attr) {
                dom.setAttribute(key, this.attr[key])
            }
            return dom;
        }
        return '';
    }

}