<template>
  <div class="image__wrapper" :class="{image__wrapper_hover: hover}">
    <div class="image" :style="{backgroundImage: `url('${pictures.picture}')` }" />
  </div>
</template>
<script src="@/components/image.js"></script>
<style lang="scss" src="@/styles/components/image.scss"></style>
