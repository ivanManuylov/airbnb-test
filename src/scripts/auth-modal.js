import {mapActions, mapGetters} from 'vuex';
import login from '@/components/login';
import signUp from '@/components/sign-up';

export default {
    name: 'auth-modal',
    components: {
        'sign-in': login,
        'sign-up': signUp,
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
