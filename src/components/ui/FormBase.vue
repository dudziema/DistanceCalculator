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

const location: Ref<string> = ref('')
const destination: Ref<string> = ref('')

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
const ctx: any = useContext()
const { serviceLoader } = ctx
const { serviceApi } = ctx
const emit = defineEmits<{
  (e: 'distance', distanceValue: string): void
}>()
const distance: Ref<string> = ref('')

function submit() {
  errors.value = []
  emit('distance', '')
  checkForm()
  if(errors.value.length > 0) return
  serviceLoader.show()
  const params: LocationParams = {
    origins: location.value,
    destinations: destination.value,
    key: process.env.VUE_APP_API_KEY,
  }
  serviceApi
    .get(params)
    .then((data: any) => {
      distance.value = data.data.rows[0].elements[0].distance.text
      emit('distance', distance.value)
      serviceLoader.hide()
    })
    .catch((e: any) => {
      console.log(e)
      serviceLoader.hide()
    })
}

function isInputValid(value: string) {
  let regex = /(?<lat>^[-+]?(?:[1-8]?\d(?:\.\d+)?|90(?:\.0+)?))\s*,\s*(?<lng>[-+]?(?:180(?:\.0+)?|(?:1[0-7]\d|[1-9]?\d)(?:\.\d+)?))$/
  
  return regex.test(value)
}

const errors: Ref<string[]> = ref([])

function checkForm() {
  if(!location.value){
    errors.value.push('Location required')
  } else if (!isInputValid(location.value)){
    errors.value.push('Valid location required')
  }

  if(!destination.value) {
    errors.value.push('Destination required')
  } else if (!isInputValid(destination.value)){
    errors.value.push('Valid location required')
  }
}
</script>

<template>
  <div class="form-base">
    <form
      class="form-base__form"
    >
      <InputBase
        v-for="(input, index) in inputs"
        :key="index"
        :label="input.label"
        :placeholder="input.placeholder"
        @saveInputValue="saveInputValue"
      />

      <ButtonBase
        type="button"
        buttonName="submit"
        @click="submit"
      />
    </form>
    {{ errors }}
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
