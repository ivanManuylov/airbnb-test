<template>
  <div id="app">
    <header-app/>
    <vuescroll @handle-scroll="scrollHandle">
      <router-view :loading="loading" />
    </vuescroll>
    <auth-modal v-if="showModal"/>
  </div>
</template>

<script src="@/scripts/app.js"></script>
<style>
@import '~materialize-css/dist/css/materialize.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.__vuescroll {
  height: calc(100% - 80px);
  margin-top: 80px;
}
.__view {
  width: 100% !important;
}
/*.scroll-area {*/
/*  position: relative;*/
/*  margin: auto;*/
/*  width: 100%;*/
/*  height: 100vh;*/
/*}*/
</style>
