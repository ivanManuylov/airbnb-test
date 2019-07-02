<template>
  <div class="grid-wrapper__main">
    <Card v-bind:key="item.id" v-for="item of list" v-bind:item="item" />
  </div>
</template>
<script src="./GridWrapper/grid-wrapper.js"></script>
<style src="@/styles/components/grid-wrapper.css"></style>
