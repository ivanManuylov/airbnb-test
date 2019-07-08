import VeeValidate from 'vee-validate';
import Vue from 'vue';
import VInput from '@/components/VInput';
import {mapGetters} from 'vuex';

Vue.use(VeeValidate);

export default {
    name: 'sign-up',
    components: {
        VInput,
    },
    methods: {
        handleSubmit() {
        },
        ...mapGetters('login', ['hasSignInError'])
    }
}
