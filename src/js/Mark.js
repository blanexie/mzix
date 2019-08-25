import {
    markdown
} from 'markdown';
class Mark {
    /**
     * 
     * @param {DOMElement} ref 
     * @param {String} html 
     */
    constructor(ref, html) {
        this.demoDiv = document.createElement("div")
        this.ref = ref;
        this.init(html)
        ref.addEventListener("keyup", event => {
            if (event.code == 'Enter') {
                this.Enter(event.srcElement)
            }

        });
    }
    /**
     * 初始化方法, 如果传入空字符串,或者不传,就是清空方法
     * @param {String} html 
     */
    init(html) {
        if (html == '' || html == null || html == undefined) {
            this.ref.innerHTML = '';
        } else {
            this.ref.innerHTML = html;
            this.ref.las
        }
        this.demoDiv.innerHTML = ''
        let lastChild = this.ref.lastChild
        if (lastChild.innerHTML !== '') {
            this.addAfter(lastChild, " ", false)
        }
    }
    /**
     * Enter 键盘事件的处理方法
     * @param {DOMElement} srcElement 
     */
    Enter(srcElement) {
        let textMark = this.getSrcElementText(srcElement)
        let text = textMark[0]
        let ismark = textMark[1]
        let markStrs = text.split(/[\n]/);
        markStrs.forEach((str, index) => {
            if (ismark) { //已经是markdowm 标签的编辑操作处理
                if (index === 0 && str.trim() === '') {
                    srcElement.addBefore()
                }

            } else { //还未转成markdown
                this.addBefore(srcElement, str)
            }
        });
    }
    /**
     * 在目标标签前面插入标签
     * @param {DOMElement} srcElement 
     * @param {String} dom 
     */
    addBefore(srcElement, dom, isMark) {
        this.ref.insertBefore(this.toMarkdown(dom), srcElement)
    }
    /**
     * 在目标后面插入标签
     * @param {DOMElement} srcElement 
     * @param {String} dom 
     */
    addAfter(srcElement, dom) {
        this.ref.insertBefore(this.toMarkdown(dom), srcElement.nextElement)
    }
    /**
     * 字符串转成 DOMElement  
     * @param {String} text 
     * @returns {DOMElement}
     */
    toMarkdown(text, isMark) {
        let dom = markdown.toHTML(text);
        this.demoDiv.innerHTML = dom
        let ret = this.demoDiv.firstElementChild
        if (isMark === false) {
            ret.setAttribute("mark", 'true')
        }
        ret.setAttribute("contenteditable", 'true')
        this.demoDiv.remove(ret)
        return ret;
    }

    /**
     *  
     * @param {DOMElement} srcElement 
     */
    removeElement(srcElement) {
        srcElement.parentElement.remove(srcElement);
    }
    /**
     * 获取DOMElement 的文本, 并且处理srcElement
     *     @param {DOMElement} srcElement 
     * @returns {String,Boolean}  返回文本和是否mark标记
     */
    getSrcElementText(srcElement) {
        let text = srcElement.innerText;
        if (!srcElement.hasAttribute("mark")) {
            srcElement.innerHTML = ''
            return [text, false];
        } else {
            return [text, true];
        }
    }

    /**
     * 空格事件方法
     * @param {DOMElement} srcElement 
     */
    Space(srcElement) {

    }
}


export {
    Mark
}