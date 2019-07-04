<template>
  <div id="app">
    <header-app/>
    <vuescroll @handle-scroll="scrollHandle">
      <router-view :loading="loading" />
    </vuescroll>
    <!--    <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHandle">-->
<!--    </vue-custom-scrollbar>-->
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
  color: #2c3e50;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
