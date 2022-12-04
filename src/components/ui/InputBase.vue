<script lang="ts" setup>
import { ShallowRef, shallowRef } from 'vue'

interface Props {
  label: string
  placeholder: string
  type: string
}

const { label, placeholder, type='text' } = defineProps<Props>()
const emit = defineEmits(['saveInputValue'])
const inputValue: ShallowRef<string> = shallowRef('')
</script>

<template>
  <div class="input-base">
    <input
      v-model="inputValue"
      :type="type"
      name="input"
      :placeholder="placeholder"
      class="input-base__input"
      @keyup.prevent="emit('saveInputValue', inputValue, label)"
    />

    <label
      for="input"
      class="input-base__label"
    >
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.input-base {
  position: relative;
  width: 350px;
  margin: $spacing-vertical-big $spacing-horizontal-big;

  &__input {
    border: none;
    border-radius: 4px;
    outline: 2px solid $color-border-default;
    font: inherit;
    font-size: $font-size-large;
    color: $color-text-default;
    background-color: transparent;
    padding: $spacing-vertical-default $spacing-horizontal-default;
    width: 300px;

    &::placeholder {
      color: $color-text-placeholder;
      font-size: $font-size-large;
    }
  }

  &__label {
    position: absolute;
    font-size: $font-size-base;
    text-transform: capitalize;
    top: 0;
    left: 0;
    color: black;
    transform: translate(24px, -10px) scale(0.8);
    background-color: white;
    padding-inline: 5px;
  }
}
</style>
