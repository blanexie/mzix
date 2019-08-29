import {
    markdown
} from 'markdown'

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
                    id: this.randomString(),
                    contenteditable: true
                }
            } else {
                this.dom = lineDOM
                this.attr = {
                    id: this.randomString(),
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
    randomString(len) {
        len = len || 16;
        let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        let maxPos = $chars.length;
        let pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
}
export default Line;