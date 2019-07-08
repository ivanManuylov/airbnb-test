import VeeValidate from 'vee-validate';
import Vue from 'vue';
import {mapGetters} from 'vuex';

Vue.use(VeeValidate);

export default {
    name: 'login',
    props: {
        name,
    },
    created() {
        console.log(this);
    },
    updated() {
        console.log(this);
    }
}
