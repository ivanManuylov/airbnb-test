import ImageComponent from '@/components/ImageComponent';
import HeartIcon from '@/components/HeartIcon';

export default {
    data() {
        return {
            hover: false
        }
    },
    components: {
        ImageComponent,
        HeartIcon,
    },
    name: 'Card',
    methods: {
        handleMouseEnter() {
            this.hover = true
        },
        handleMouseLeave() {
            this.hover = false
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        }
    }
};
