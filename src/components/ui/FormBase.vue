<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { useContext } from '@/composables/context'
import InputBase from '@/components/ui/InputBase.vue'
import LocationParams from '@/types/LocationParams'
import FormInput from '@/types/FormInput'
import InputLabels from '@/types/InputLabels'

interface Props {
  formTittle: string
}

const { formTittle } = defineProps<Props>()

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

const distance = ref()
const ctx: any = useContext()

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

const inputs: FormInput[] = [
  { label: InputLabels.LOCATION, placeholder: '51.4822656,-0.1933769' },
  { label: InputLabels.DESTINATION, placeholder: '51.4994794,-0.1269979' },
]
</script>

<template>
  <div class="form-base">
    <h2 class="form-base__title">{{ formTittle }}</h2>
    <p>
      This app calculates for you distance between two locations. Fill below
      inputs with the longitude and latitude in below form and click submit
      button to see the results.
    </p>

    <form class="form-base__form">
      <InputBase
        v-for="(input, index) in inputs"
        :key="index"
        :label="input.label"
        :placeholder="input.placeholder"
        @saveInputValue="saveInputValue"
      />
    </form>

    <button @click="submit">Submit</button>

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
}

.form-base__form {
  display: flex;
  flex-direction: row;
}
h2 {
  font-weight: 600;
  font-size: 2.4em;
}
p {
  font-size: 14px;
}
</style>
