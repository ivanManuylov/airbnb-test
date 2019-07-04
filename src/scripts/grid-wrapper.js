import card from '@/components/card';

export default {
    components: {
        card,
    },
    name: 'GridWrapper',
    props: {
        list: {
            type: Array,
            required: true,
        },
    }
};
