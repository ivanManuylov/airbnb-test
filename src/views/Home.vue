<template>
  <GridWrapper :list="list" :loading="loading"/>
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
    props: {
        loading: {
            type: Boolean,
            required: true,
        }
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
    updated() {
        if(this.loading) {
            this.fetch();
        }
    },
    mounted() {
        this.fetch();
    },
};
</script>
