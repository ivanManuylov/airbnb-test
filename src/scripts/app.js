import headerApp from '@/components/header-app';
import vuescroll from 'vuescroll';
import Vue from 'vue';
import axios from 'axios';
import modal from '@/components/auth-modal';
import {mapState} from 'vuex';

Vue.prototype.$vuescrollConfig = {
    bar: {
        background: '#00c4b2'
    },
    view: {
      width: '100%',
    },
    vuescroll: {
        mode: 'native',
        sizeStrategy: 'percent',
        detectResize: true
    },
    scrollPanel: {
        initialScrollY: false,
        initialScrollX: false,
        scrollingX: true,
        scrollingY: true,
        speed: 300,
        easing: 'easeOutCubic',
        verticalNativeBarPos: 'right'
    }
};

export default {
    data() {
      return {
          loading: false,
      }
    },
    name: 'app',
    components: {
        'auth-modal': modal,
        'header-app': headerApp,
        vuescroll,
    },
    methods: {
        async fetch() {
            axios('/api/info.json').then(response => {
                this.list = this.list.concat(response.data.explore_tabs[0].sections[0].trip_templates);
            });
        },
        scrollHandle({process}) {
            this.loading = process > 0.9;
        }
    },
    computed: mapState('login', {
        showModal: 'isShowModal'
    })
};
