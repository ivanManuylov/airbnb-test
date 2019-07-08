import VeeValidate from 'vee-validate';
import Vue from 'vue';
import customInput from '@/components/сustom-input';

Vue.use(VeeValidate);

export default {
    name: 'sign-up',
    components: {
        'custom-input': customInput,
    }
}
