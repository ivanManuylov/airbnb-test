import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
    name: 'c-input',
    props: [
        'inputType',
        'label',
        'name',
        'validateRule',
    ]
};
