<template>
  <div :class="b()">
    <div :class="b('shadow')" @click="change" />
    <div :class="b('wrapper')">
      <span :class="b('close')" @click="change">&#10006;</span>
      <div :class="b('header')">
        <span :class="b('tabs')">
          <span :class="b('tab', {active: true})">SIGN IN</span>  |
          <span :class="b('tab')">SIGN UP</span>
        </span>
      </div>
      <div :class="b('main')">
        <form @submit.prevent="handleSubmit">
          <input type="text" required>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="@/scripts/auth-modal.js"></script>
<style lang="scss" src="@/styles/components/auth-modal.scss"></style>
