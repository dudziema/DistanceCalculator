<script lang="ts" setup>
import { Ref, ref } from 'vue'

interface Props {
  label: string
  placeholder: string
  type: string
}

const { label, placeholder, type='text' } = defineProps<Props>()
const emit = defineEmits(['saveInputValue'])
const inputValue: Ref<string> = ref('')
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
  margin: 20px;

  &__input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    font: inherit;
    color: black;
    background-color: transparent;
    outline: 2px solid black;
    font-size: 0.8em;
    width: 300px;

    &::placeholder {
      color: rgb(166, 166, 166);
      font-size: 0.8em;
    }
  }

  &__label {
    position: absolute;
    font-size: 16px;
    text-transform: capitalize;
    top: 0;
    left: 0;
    color: black;
    transform: translate(24px, -14px) scale(0.8);
    background-color: white;
    padding-inline: 5px;
  }
}
</style>
