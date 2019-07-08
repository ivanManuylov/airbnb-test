<template>
  <div>
    <label>
      <span :class="b('input-title')">{{label}}</span>
      <input v-validate="{validateRule}" :v-model="inputType" :name="name">
    </label>
    {{validateRule}}
    <span :class="b('error')">{{ errors.first(name) }}</span>
  </div>
</template>

<script src="@/scripts/custom-input.js"></script>
