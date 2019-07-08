<template>
  <form>
    <label>
      <div :class="b('input-title')">First name</div>
      <input v-validate="'required|min:2'" type="text" name="first-name">
      <div :class="b('error')">{{ errors.first('first-name') }}</div>
    </label>
    <label>
      <div :class="b('input-title')">Last name</div>
      <input v-validate="'required|min:2'" type="text" name="last-name">
      <div :class="b('error')">{{ errors.first('last-name') }}</div>
    </label>
    <label>
      <div :class="b('input-title')">Email</div>
      <input v-validate="'required|email'" type="email" name="email">
      <div :class="b('error')">{{ errors.first('email') }}</div>
    </label>
    <label>
      <div :class="b('input-title')">Password</div>
      <input v-validate="'required|password'" type="password" name="password">
      <div :class="b('error')">{{ errors.first('password') }}</div>
    </label>
    <label>
      <div :class="b('input-title')">Repeat password</div>
      <input v-validate="'required|confirmed:password'" type="password" name="password">
      <div :class="b('error')">{{ errors.first('password') }}</div>
    </label>
    <custom-input inputType="text" validateRule="required|min:3" name="text" label="Text"></custom-input>
  </form>
</template>

<script src="@/scripts/sign-up.js"></script>
