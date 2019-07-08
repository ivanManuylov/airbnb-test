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
        summaries: {
            type: Array,
            required: true,
        },
        picture: {
            type: Object,
            required: true,
        },
        review_count: {
            type: Number,
        },
        offered_languages_text: {
            type: String,
            required: true,
        },
        display_rating: {
            type: Number,
        },
        detail: {
            type: String,
        },
        price_string: {
            type: String,
        },
        title: {
            type: String,
        },
        kicker_text: {
            type: String,
        },
        carousel_collection_multimedia: {
            type: Array,
        },
        kicker_text_color: {
            type: String,
        }
    }
};
