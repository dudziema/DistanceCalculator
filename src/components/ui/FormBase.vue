<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { useContext } from '@/composables/context'

import InputBase from '@/components/ui/InputBase.vue'
import ButtonBase from '@/components/ui/ButtonBase.vue'

import LocationParams from '@/types/LocationParams'
import FormInput from '@/types/FormInput'
import InputLabels from '@/types/InputLabels'

interface Props {
  inputs: FormInput[]
}

const { inputs } = defineProps<Props>()

const ctx: any = useContext()
const location: Ref<string> = ref('')
const destination: Ref<string> = ref('')
const distance: Ref<string> = ref('')

function saveInputValue(inputValue: string, inputName: InputLabels) {
  switch (inputName) {
  case InputLabels.LOCATION:
    location.value = inputValue
    break
  case InputLabels.DESTINATION:
    destination.value = inputValue
    break
  }
}

function submit() {
  const params: LocationParams = {
    origins: location.value,
    destinations: destination.value,
    key: 'yvneAg8ShdBQhx722CiXNkyITufRQ',
  }
  ctx.serviceApi
    .get(params)
    .then((data: any) => {
      distance.value = data.data.rows[0].elements[0].distance.text
    })
    .catch((e: any) => console.log(e))
}
</script>

<template>
  <div class="form-base">
    <form class="form-base__form">
      <InputBase
        v-for="(input, index) in inputs"
        :key="index"
        :label="input.label"
        :placeholder="input.placeholder"
        @saveInputValue="saveInputValue"
      />
    </form>

    <ButtonBase
      type="submit"
      buttonName="submit"
      @submit="submit"
    />

    {{ distance }}
  </div>
</template>

<style lang="scss" scoped>
.form-base {
  width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;

  &__form {
    display: flex;
    flex-direction: row;
  }
}
</style>
