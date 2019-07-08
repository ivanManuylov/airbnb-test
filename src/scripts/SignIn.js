import VeeValidate from 'vee-validate';
import Vue from 'vue';
import VInput from '@/components/VInput'

Vue.use(VeeValidate);

export default {
    name: 'login',
    components: {
      VInput,
    },
}
