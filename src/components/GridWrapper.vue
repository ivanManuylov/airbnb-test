<template>
  <div class="grid-wrapper__main">
    <Card :key="item.id" v-for="item of list" :item="item" />
  </div>
</template>
<script src="./GridWrapper/grid-wrapper.js"></script>
<style lang="scss" src="@/styles/components/grid-wrapper.scss"></style>
