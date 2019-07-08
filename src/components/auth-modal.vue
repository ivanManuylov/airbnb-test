<template>
  <div :class="b()">
    <div :class="b('shadow')" @click="change" />
    <div :class="b('wrapper')">
      <span :class="b('close')" @click="change">&#10006;</span>
      <div :class="b('header')">
        <span :class="b('tabs')">
          <span :class="b('tab', {active: formName})" @click="changeSignIn">SIGN IN</span>  |
          <span :class="b('tab', {active: !formName})" @click="changeSignUp">SIGN UP</span>
        </span>
      </div>
      <div :class="b('main-wrapper')">
        <div :class="b('main')">
          <keep-alive>
            <AppSignIn v-if="formName"/>
            <AppSignUp v-else />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="@/scripts/auth-modal.js"></script>
<style lang="scss" src="@/styles/components/auth-modal.scss"></style>
