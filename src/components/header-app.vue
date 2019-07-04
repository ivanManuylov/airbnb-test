<template>
  <div :class="b('wrapper')">
      <router-link :class="b('link')" to="/">
          Home
      </router-link>
      <router-link :class="b('link')" to="/about">
          About
      </router-link>
  </div>
</template>
<script src="@/scripts/header-app.js"></script>
<style lang="scss" src="@/styles/components/header-app.scss"></style>
