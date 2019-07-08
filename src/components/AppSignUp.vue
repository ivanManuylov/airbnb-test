<template>
  <form>
    <VInput inputType="text" validateRule="required|min:2" name="first-name" label="First name"></VInput>
    <VInput inputType="text" validateRule="required|min:2" name="last-name" label="Last name"></VInput>
    <VInput inputType="email" validateRule="required|email" name="email" label="Email"></VInput>
    <VInput inputType="password" validateRule="required" name="password" label="Password" ref="password"></VInput>
    <VInput inputType="password" validateRule="required|confirmed:password" name="password_confirmation" label="Repeat password" dataV="password"></VInput>
    <button type="submit" @click.prevent="handleSubmit">Оптравить</button>
  </form>
</template>

<script src="@/scripts/SignUp.js"></script>
