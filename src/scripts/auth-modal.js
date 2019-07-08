import {mapActions, mapGetters} from 'vuex';
import AppSignIn from '@/components/AppSignIn';
import AppSignUp from '@/components/AppSignUp';

export default {
    name: 'auth-modal',
    components: {
        AppSignIn,
        AppSignUp,
    },
    methods: {
        handleSubmit() {
        },
        handleKeydown(e) {
            if (e.code === 'Escape') {
                this.change()
            }
        },
        ...mapActions('login', {
            change: 'change',
            changeSignIn: 'sign-in-form',
            changeSignUp: 'sign-up-form'
        })
    },
    computed: {
        ...mapGetters('login',[
            'formName'
        ])
    },
    mounted() {
        document.addEventListener('keydown', this.handleKeydown)
    },
    destroyed() {
        document.removeEventListener('keydown', this.handleKeydown)
    }
}
