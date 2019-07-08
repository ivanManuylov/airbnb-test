<template>
  <div :class="b('wrapper')">
    <div :class="b('header')"></div>
    <form class="login">
      <label>
        Email
        <input
          v-validate="'required|email'"
          type="email"
          name="email"
        >
        <span :class="b('error')">
          {{ errors.first('email') }}
        </span>
      </label>
      <label>
        Password
        <input
          v-validate="'required|min:6'"
          type="password"
          name="password"
        >
        <span :class="b('error')">
          {{ errors.first('password') }}
        </span>
      </label>
    </form>
  </div>
</template>

<script src="@/scripts/login.js"></script>
