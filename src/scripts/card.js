import ImageComponent from '@/components/image-component';
import HeartIcon from '@/components/heart-icon';

export default {
    data() {
        return {
            hover: false
        }
    },
    components: {
        'image-component': ImageComponent,
        'heart-icon': HeartIcon,
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
