export default {
    name: 'ImageComponent',
    props: {
        pictures: {
            type: Object,
            required: true,
        },
        hover: {
            type: Boolean,
            required: true,
        }
    }
}
