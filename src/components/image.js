export default {
    data() {
        return {
            list: [],
            active: false,
            timer: null,
            time: 1000,
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
        enter() {
            this.timer = setInterval(() => {
                const length = this.list.length;
                const activeIndex = this.list.findIndex((el) => el.isActive);
                let newList = this.list.map((element) => ({...element, isActive: false}));


                if (activeIndex === -1 || activeIndex + 1 === length) {
                    this.list = newList.map((element, index) => ({...element, isActive: index === 0}))
                } else {
                    this.list = newList.map((element, index) => ({...element, isActive: activeIndex + 1 === index}));
                    this.time = 2000;
                }
                this.active = true;
            }, this.time);
        },
        leave() {
            this.list = this.list.map((element) => ({...element, isActive: false}));
            this.active = false;
            clearInterval(this.timer);
            this.timer = null;
        },
    },
    created() {
        if (this.collection && this.collection.length) {
            this.list = Array.from({ length: this.collection.length }, () => ({isActive: false}));
        }
    },
}
