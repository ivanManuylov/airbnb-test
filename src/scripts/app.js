import headerApp from '@/components/header-app';
import vueCustomScrollbar from 'vue-custom-scrollbar'
import vuescroll from 'vuescroll';
import Vue from 'vue';
import axios from 'axios';
// import vuescroll from 'vuescroll/dist/vuescroll-slide';
//
Vue.prototype.$vuescrollConfig = {
    bar: {
        background: '#000'
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
        vueCustomScrollbar,
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
    }
};
