/**
 * 删除事件的处理
 */
class Delete {

    constructor() {
        this.demoDiv = document.createElement("div")
    }

    /**
     *  enter键盘的处理方法
     * @param {DOMElement} srcElement 
     */
    dealDom(srcElement) {
        let act = [];
        this.srcElement = srcElement;
        let text = srcElement.innerText;
        if (text == '') {
            if (srcElement.hasAttribute("mark")) {
                let obj = {};
                obj.dom = 'mark'
                obj.deal = 'removeAttr'
                obj.srcElement = srcElement;
                act.push(obj)
            } else {
                if (srcElement.tagName !== 'P') {
                    let p = document.createElement("p")
                    p.setAttribute("contenteditable", true)
                    let obj = {};
                    obj.dom = p
                    obj.deal = 'replace'
                    obj.srcElement = srcElement;
                    act.push(obj)
                } else {
                    let obj = {};
                    obj.deal = 'remove'
                    obj.srcElement = srcElement;
                    act.push(obj)
                }
            }
        }
        return act;
    }

}

export {
    Delete
}