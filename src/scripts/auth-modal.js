import {mapActions} from 'vuex';

export default {
    name: 'auth-modal',
    methods: {
        handleSubmit() {
        },
        handleKeydown(e) {
            if (e.code === 'Escape') {
                this.change()
            }
        },
        ...mapActions('login', ['change'])
    },
    mounted() {
        document.addEventListener('keydown', this.handleKeydown)
    },
    destroyed() {
        document.removeEventListener('keydown', this.handleKeydown)
    }
}
