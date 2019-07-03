<template>
  <div>
    <div class="home">Home</div>
    <GridWrapper v-bind:list="list" />
  </div>
</template>

<script>
import GridWrapper from '@/components/GridWrapper';
import axios from 'axios';

export default {
    data() {
        return {
            list: [],
        }
    },
    name: 'home',
    components: {
        GridWrapper
    },
    methods: {
        async fetch() {
            axios('/api/info.json').then(response => {
                this.list = response.data.explore_tabs[0].sections[0].trip_templates;
            })
        },
    },
    created() {
        this.fetch();
    },
}
</script>
