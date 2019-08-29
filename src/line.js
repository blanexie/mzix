import Vue from 'vue'

Vue.component('anchored-heading', {
    render: function (createElement) {

        let element = createElement(
            'h' + this.level,
            [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        )
        return element;
    },
    data() {
        return {};
    },
    mounted() {},
    computed: {
        ...mapState(["lines"]),
        ...mapMutations(["addLine", "focus"])
    },
    methods: {
        test() {
            this.$store.commit('addLine', {
                line: new Line("#sadsa")
            });
            this.addLine({
                line: new Line("111111")
            });
            this.addLine({
                line: new Line("1. sadsa")
            });
            this.addLine({
                line: new Line("* sadsa")
            });
        }
    }
})