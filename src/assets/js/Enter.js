import {
    markdown
} from 'markdown';

class Enter {

    constructor(srcElement) {
        this.demoDiv = document.createElement("div")
        this.srcElement = srcElement;
        this.tagName = srcElement.tagName;
        this.text = srcElement.innerText;
    }

    strToDOM(line) {
        this.demoDiv.innerHTML = line
        let ret = this.demoDiv.firstElementChild
        ret.setAttribute("contenteditable", 'true')
        this.demoDiv.remove(ret)
        return ret;
    }
    /**
     *  enter键盘的处理方法
     * @param {DOMElement} srcElement 
     */
    dealDom() {
        let tagName = this.srcElement.tagName;
        if (tagName == 'P') {
            return this.pDOM(this.srcElement.innerText)
        }
        if (tagName.indexOf('H') == 0) {
            return this.hDOM(this.srcElement.innerText)
        }
    }

    hDOM(text) {
        let lines = text.split(/[\n]/);
        let doms = [];
        let line = lines[0];
        let domStr = markdown.toHTML(line);
        let domStr2 = markdown.toHTML(lines[1]);
        if (domStr === '') { //第一行是空的
            if (domStr2 === '') { //第二行也是空的
                let obj = {};
                obj.srcElement = this.srcElement;
                obj.dom = this.strToDOM("<p></p>")
                obj.deal = 'innsertAfter' //后加空行
                doms.push(obj)
            } else { //第二行不是空的
                let obj = {};
                obj.srcElement = this.srcElement;
                obj.dom = this.strToDOM("<p></p>")
                obj.deal = 'innsertBefore' //前加空行
                doms.push(obj)
            }
        } else { // 第一行不是空的
            if (domStr2 === '') { //第二行是空的
                let obj = {};
                obj.srcElement = this.srcElement;
                obj.dom = this.strToDOM("<p></p>")
                obj.deal = 'insertAfter'
                doms.push(obj)

                let obj2 = {};
                obj2.srcElement = this.srcElement;
                obj2.dom = domStr
                obj2.deal = 'innerHTML'
                doms.push(obj2)
            } else {
                let obj2 = {};
                obj2.srcElement = this.srcElement;
                obj2.dom = domStr
                obj2.deal = 'innerHTML'
                doms.push(obj2)
                let obj = {};
                obj.srcElement = this.srcElement;
                obj.dom = this.strToDOM(domStr2)
                obj.deal = 'insertAfter'
                doms.push(obj)
            }
        }
        return doms
    }


    pDOM(text) {
        let lines = text.split(/[\n]/);
        let doms = [];
        let domStr = markdown.toHTML(lines[0]);
        let domStr2 = markdown.toHTML(lines[1]);
        if (domStr === '') { //第一行是空的
            if (domStr2 === '') { //第二行也是空的
                let obj = {};
                obj.srcElement = this.srcElement;
                obj.dom = this.strToDOM("<p></p>")
                obj.deal = 'insertBefore' //后面加空行
                doms.push(obj)
                
                if(lines.length==3){
                    let obj2= {};
                    obj2.srcElement = this.srcElement;
                    obj2.dom = this.strToDOM(markdown.toHTML(lines[2]))
                    obj2.deal = 'replace' //后面加空行
                    doms.push(obj2)
                }
            } else { //第二行不是空的
                let obj = {};
                obj.srcElement = this.srcElement;
                obj.dom = ''
                obj.deal = 'innerHTML' //清空当前行
                doms.push(obj)

                let obj2 = {};
                obj2.srcElement = this.srcElement;
                obj2.dom = this.strToDOM(domStr2)
                obj2.deal = 'insertAfter' //后面加一行
                doms.push(obj2)
            }
        } else { // 第一行不是空的
            if (domStr2 === '') { //第二行空的
                let obj = {};
                obj.srcElement = this.srcElement;
                obj.dom = this.strToDOM(domStr)
                obj.deal = 'insertBefore' //前面
                doms.push(obj)

                let obj2 = {};
                obj2.srcElement = this.srcElement;
                obj2.dom = ''
                obj2.deal = 'innerHTML' //当前行更新
                doms.push(obj2)
            } else { //第二行非空
                let obj = {};
                obj.srcElement = this.srcElement;
                obj.dom = this.strToDOM(domStr)
                obj.deal = 'insertBefore'
                doms.push(obj)

                let obj2 = {};
                obj2.srcElement = this.srcElement;
                obj2.dom = this.strToDOM(domStr2)
                obj2.deal = 'replace' //替换当前行
                doms.push(obj2)
            }
        }
        return doms
    }
}

export {
    Enter
}