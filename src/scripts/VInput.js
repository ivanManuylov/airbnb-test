import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
    name: 'VInput',
    props: [
        'inputType',
        'label',
        'name',
        'validateRule',
        'dataV',
    ],
    methods: {

    },
};
