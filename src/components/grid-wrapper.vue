<template>
    <div class="grid-wrapper__main">
      <card :key="item.id" v-for="item of list" v-bind="item"></card>
    </div>
</template>
<script src="@/scripts/grid-wrapper.js"></script>
<style lang="scss" src="@/styles/components/grid-wrapper.scss"></style>
