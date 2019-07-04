<template>
    <div class="grid-wrapper__main">
      <card :key="item.id" v-for="item of list" :item="item" />
    </div>
</template>
<script src="@/scripts/grid-wrapper.js"></script>
<style lang="scss" src="@/styles/components/grid-wrapper.scss"></style>
