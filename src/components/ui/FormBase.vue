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
const { serviceLoader } = ctx
const { serviceApi } = ctx
const { serviceAlert } = ctx

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

const params = () => {
  return {
    origins: location.value,
    destinations: destination.value,
    key: process.env.VUE_APP_API_KEY,
  } as LocationParams
}

const emit = defineEmits<{
  (e: 'distance', distanceValue: string): void
}>()

function submit() {
  emit('distance', '')
  validationErrors.value = []

  checkForm()
  if(validationErrors.value.length > 0) return

  serviceLoader.show()
  serviceApi.get(params())
    .then(({ data }: any) => {
      let distanceValue = data.rows[0].elements[0]
      
      // Sometimes API doesn't return distance for specific valid coordinates
      if(distanceValue.distance) {
        distance.value = distanceValue.distance.text
        emit('distance', distance.value)
      } else {
        serviceAlert.open(['Distance can not be calculated for this locations.'])
      }
    })
    .catch(() => {
      serviceAlert.open(['Something went wrong. Please, try again later'])
    })
    .finally(()=> {
      serviceLoader.hide()
    })
}

function areCoordinatesValid(coordinates: string) {
  let regex = /(?<lat>^[-+]?(?:[1-8]?\d(?:\.\d+)?|90(?:\.0+)?))\s*,\s*(?<lng>[-+]?(?:180(?:\.0+)?|(?:1[0-7]\d|[1-9]?\d)(?:\.\d+)?))$/
  
  return regex.test(coordinates)
}

const validationErrors: Ref<string[]> = ref([])

function checkForm() {
  if(!location.value){
    validationErrors.value.push('Location required')
  } else if (!areCoordinatesValid(location.value)){
    validationErrors.value.push('Valid location required')
  }

  if(!destination.value) {
    validationErrors.value.push('Destination required')
  } else if (!areCoordinatesValid(destination.value)){
    validationErrors.value.push('Valid destination required')
  }

  if(validationErrors.value.length > 0) {
    serviceAlert.open(validationErrors.value)
  }
}
</script>

<template>
  <div class="form-base">
    <form class="form-base__form">
      <div class="form-base__inputs">
        <InputBase
          v-for="(input, index) in inputs"
          :key="index"
          type="text"
          :label="input.label"
          :placeholder="input.placeholder"
          @save-input-value="saveInputValue"
        />
      </div>

      <ButtonBase
        type="button"
        button-name="submit"
        @click="submit"
      />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-base {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  &__inputs {
    display: flex;
    flex-direction: row;

    @include devices(tablet) {
      flex-direction: column;
    }
  }
}
</style>
