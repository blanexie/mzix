import {
    Enter
} from './Enter.js'


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
                let enter = new Enter(event.srcElement);
                let dealAction = enter.dealDom()
                this.deal(dealAction)
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
            let p = document.createElement("p");
            p.setAttribute("contenteditable", 'true')
            this.addAfter(lastChild, p)
        }
    }

    deal(dealAction) {
        dealAction.forEach(action => {
            if (action.deal == 'insertBefore') {
                this.addBefore(action.srcElement, action.dom)
            }
            if (action.deal == 'insertAfter') {
                this.addAfter(action.srcElement, action.dom)
            }
            if (action.deal == 'replace') {
                this.relaceDom(action.srcElement, action.dom)
            }
            if (action.deal == 'innerHTML') {
                this.innerHTMLDom(action.srcElement, action.dom)
            }

            if (action.deal == 'remove') {
                this.removeDom(action.srcElement)
            }


        });
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
        srcElement.replaceWith(dom)
    }

    /**
     * 在目标后面插入标签
     * @param {DOMElement} srcElement 
     * @param {String} dom 
     */
    addAfter(srcElement, dom) {
        this.ref.insertBefore(dom, srcElement.nextElementSibling)
    }

    innerHTMLDom(srcElement, str) {
        srcElement.innerHTML = str
    }

    /**
     *  
     * @param {DOMElement} srcElement 
     */
    removeDom(srcElement) {
        srcElement.remove();
    }

}


export {
    Mark
}