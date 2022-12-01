<script lang="ts" setup>
import { Ref, ref } from 'vue'
interface Props {
  label: string
}

const { label } = defineProps<Props>()
const emit = defineEmits(['setInputValue'])
const inputValue: Ref<string> = ref('')

</script>

<template>
  <div class="input-base">
    <input
      v-model="inputValue"
      type="text"
      name="input"
      class="input-base__input"
      @keyup.prevent="emit('setInputValue', inputValue, label)"
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
  width: 200px;
  margin: 20px;

  &__input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    font: inherit;
    color: black;
    background-color: transparent;
    outline: 2px solid black;
  }

  &__label {
    position: absolute;
    top: 0;
    left: 0;
    color: black;
    transform: translate(10px, -14px) scale(0.8);
    background-color: white;
    padding-inline: 5px;
  }
}
</style>
