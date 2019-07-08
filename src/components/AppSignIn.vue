<template>
  <div :class="b('wrapper')">
    <div :class="b('header')"></div>
    <form class="login">
      <VInput
        inputType="email"
        label="Email"
        name="email"
        validateRule="required|email"
      />
      <VInput
        inputType="password"
        label="Password"
        name="password"
        validateRule="required|min:4"
      />
    </form>
  </div>
</template>

<script src="@/scripts/SignIn.js"></script>
