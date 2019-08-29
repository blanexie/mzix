import Vue from 'vue'
import Vuex from 'vuex';//引用vuex
Vue.use(Vuex);//使用vuex


const state = {
    focusId: null,
    position: null,
    lines: []
};
const mutations = {
    addLine(state, obj) {
        state.lines.push(obj.line)
        if (obj.focusId !== undefined) {
            state.focusId = obj.focusId
        }
        if (obj.position !== undefined) {
            state.position = obj.position
        }
    },

    delLine(state, id) {
        state.lines = state.lines.filter(line => !line.id == id)
    },

    focus(state, obj) {
        if (obj.focusId !== undefined) {
            state.focusId = obj.focusId
        }
        if (obj.position !== undefined) {
            state.position = obj.position
        }
    },

    updateLine(state, obj) {
        state.lines.map(line => {
            obj.line.id = line.id;
            if (obj.focusId !== undefined) {
                state.focusId = obj.focusId
            }
            if (obj.position !== undefined) {
                state.position = obj.position
            }
            return obj.line;
        })
    },

    replaceLine(state, obj) {
        state.lines.map(line => {
            if (line.id == obj.line.id) {
                if (obj.focusId !== undefined) {
                    state.focusId = obj.focusId
                }
                if (obj.position !== undefined) {
                    state.position = obj.position
                }
                return obj.line;
            } else {
                return line;
            }
        })

    }
}
const getters = {
    lines: (state, id) => {
        for (let item in state.lines) {
            if (item.id !== id) {
                return item;
            }
        }
    }
}



export default new   Vuex.Store({
    state,
    mutations,
    getters
  });