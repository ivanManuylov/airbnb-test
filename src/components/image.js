export default {
    data() {
        return {
            list: [],
            active: false,
            timer: null,
        }
    },
    name: 'ImageComponent',
    props: {
        collection: {
            type: Array,
            required: false,
        },
        pictures: {
            type: Object,
            required: true,
        },
        hover: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        clearActive(element) {
            return {
                ...element,
                isActive: false
            };
        },
        interval() {
            const length = this.list.length;
            const activeIndex = this.list.findIndex((el) => el.isActive);
            let newList = this.list.map(this.clearActive);

            if (activeIndex === -1 || activeIndex + 1 === length) {
                this.list = newList.map((element, index) => ({...element, isActive: index === 0}))
            } else {
                this.list = newList.map((element, index) => ({...element, isActive: activeIndex + 1 === index}));
            }
            this.active = true;
        },
        enter() {
            this.timeout = setTimeout(() => {
                this.interval();
                this.timer = setInterval(() => this.interval(), 2500);
            }, 1000);
        },
        leave() {
            this.list = this.list.map(this.clearActive);
            this.active = false;
            clearInterval(this.timer);
            clearTimeout(this.timeout);
        },
    },
    created() {
        if (this.collection && this.collection.length) {
            this.list = Array.from({ length: this.collection.length }, this.clearActive);
        }
    },
}
