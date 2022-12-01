<script lang="ts" setup>
import InputBase from '@/components/ui/InputBase.vue'

interface Props {
  formTittle: string
}

const { formTittle } = defineProps<Props>()

function print(e, l) {
  console.log(e, l)
}
</script>

<template>
  <div class="form-base">
    <h2 class="form-base__title">{{ formTittle }}</h2>

    <form
      class="form-base__form"
      action="/action_page.php"
    >
      <InputBase
        label="Location"
        @setInputValue="print"
      />

      <InputBase
        label="Destination"
        @setInputValue="print"
      />

      <input
        type="submit"
        value="Submit"
      />
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>
