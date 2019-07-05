import {mapActions} from 'vuex';

export default {
    name: 'header-app',
    methods: mapActions('login', ['change']),
}
