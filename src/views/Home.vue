<template>
  <GridWrapper :list="list" />
</template>

<script>
import GridWrapper from '@/components/grid-wrapper';
import axios from 'axios';

export default {
    data() {
        return {
            list: [],
        };
    },
    getters: {

    },
    name: 'home',
    components: {
        GridWrapper
    },
    methods: {
        async fetch() {
            axios('/api/info.json').then(response => {
                this.list = this.list.concat(response.data.explore_tabs[0].sections[0].trip_templates);
            });
        }
    },
    mounted() {
        this.fetch();
        window.onscroll = () => {
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

            if (bottomOfWindow) {
                this.fetch();
            }
        }
    },
};
</script>
