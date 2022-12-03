<script lang="ts" setup>
interface Props {
  buttonName: string,
  type: string,
}

const { buttonName, type='button' } = defineProps<Props>()
const emit = defineEmits(['submit'])
</script>

<template>
  <button
    class="button-base"
    :type="type"
    @click="emit('submit')"
  >
    {{ buttonName }}
  </button>
</template>

<style lang="scss" scoped>
.button-base {
  text-transform: capitalize;
  margin: 20px;
  padding: 8px 16px;
  outline: 2px solid black;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>
