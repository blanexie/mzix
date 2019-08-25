import {
    markdown
} from 'markdown';

class MzixDowm {
    constructor(isMark) {
        this.markdown = markdown;
        this.isMark = isMark
        this.demoDiv = document.createElement("div")
    }

    /**
     * 字符串转成 DOMElement  
     * @param {String} text 
     * @returns {DOMElement}
     */
    toMarkdown(text) {
        let lines = text.split(/\n/);
        let lineDOMs = []
        if (!this.isMark) {
            //第一行变mark 试试
            let lineDOM = this.markdown.toHTML(lines[0]);
            if (lineDOM.trim() === '') { //第一行是空
                let dom1 = {};
                dom1.deal = 'insertBefore'
                dom1.dom = this.strToDOM('<p>' + lineDOM + '</p>')
                lineDOMs.push(dom1)
                let lineDOM2 = this.markdown.toHTML(lines[1]);
                if (lineDOM2.trim() === '') { //第二行为空
                    let dom2 = {};
                    dom2.deal = 'clear' //清空成初始状态
                    lineDOMs.push(dom2)
                } else { //第二行不空
                    let dom2 = {};
                    dom2.deal = 'replace' //清空成初始状态
                    dom2.dom = this.strToDOM(lineDOM2)
                    lineDOMs.push(dom2)
                }
            } else { //第一行不是空
                let dom1 = {};
                dom1.deal = 'insertBefore'
                dom1.dom = this.strToDOM(lineDOM)
                lineDOMs.push(dom1)
                let lineDOM2 = this.markdown.toHTML(lines[1]);
                if (lineDOM2.trim() === '') { //第二行为空
                    let dom2 = {};
                    dom2.deal = 'clear' //清空成初始状态
                    lineDOMs.push(dom2)
                } else { //第二行不空
                    let dom2 = {};
                    dom2.deal = 'replace' //替换
                    dom2.dom = this.strToDOM(lineDOM2)
                    lineDOMs.push(dom2)
                }
            }
        }


        return lineDOMs;
    }

    strToDOM(line) {
        this.demoDiv.innerHTML = line
        let ret = this.demoDiv.firstElementChild
        if (!this.isMark) {
            ret.setAttribute("mark", 'true')
        }
        ret.setAttribute("contenteditable", 'true')
        this.demoDiv.remove(ret)
        return ret;
    }



}

class Mark {
    /**
     * 
     * @param {DOMElement} ref 
     * @param {String} html 
     */
    constructor(ref, html) {
        this.demoDiv = document.createElement("div")
        this.ref = ref;
        this.mzixDowm = new MzixDowm(false)
        this.isMzixDowm = new MzixDowm(true)
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
        }
        let lastChild = this.ref.lastElementChild
        if (lastChild.innerHTML.trim() !== '') {
            let p = dom.createElement("p");
            p.setAttribute("contenteditable", 'true')
            this.addAfter(lastChild, p)
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
        if (ismark) {

        } else {
            let doms = this.mzixDowm.toMarkdown(text);
            doms.forEach(obj => {
                if (obj.deal === 'insertBefore') { // 在前面插入
                    this.addBefore(srcElement, obj.dom)
                }
                if (obj.deal === 'clear') { //清空成初始状态
                    srcElement.innerHTML = ''
                }
                if (obj.deal === 'replace') { //清空成初始状态
                    //TODO 替换
                }
                if (obj.deal === 'replace') { //清空成初始状态
                    //TODO 替换
                }
            });

        }

    }
    /**
     * 在目标标签前面插入标签
     * @param {DOMElement} srcElement 
     * @param {String} dom 
     */
    addBefore(srcElement, dom) {
        this.ref.insertBefore(dom, srcElement)
    }

    relaceDom(srcElement, dom) {
        this.ref.replace(srcElement, dom)
    }

    /**
     * 在目标后面插入标签
     * @param {DOMElement} srcElement 
     * @param {String} dom 
     */
    addAfter(srcElement, dom) {
        this.ref.insertBefore(dom, srcElement.nextElement)
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