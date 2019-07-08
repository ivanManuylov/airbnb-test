<template>
  <div>
    <label>
      <span :class="b('input-title')">{{label}}</span>
      <input v-validate.continues="validateRule" :name="name" :type="inputType" :data-vv-as="dataV" ref="`${name}`">
    </label>
    <span v-show="errors.has(name)" :class="b('error')">{{ errors.first(name) }}</span>
  </div>
</template>

<script src="@/scripts/VInput.js"></script>
