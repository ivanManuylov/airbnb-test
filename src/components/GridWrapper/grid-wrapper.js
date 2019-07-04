import Card from '@/components/Card';

export default {
    components: {
        Card
    },
    name: 'GridWrapper',
    props: {
        list: {
            type: Array,
            required: true,
        },
    }
};
