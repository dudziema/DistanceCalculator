<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { useContext } from '@/composables/context'
import FormBase from '@/components/ui/FormBase.vue'
import TheLoader from '@/components/TheLoader.vue'
import TheAllert from '@/components/TheAllert.vue'
import ImageMap from '@/assets/ImageMap.vue'
import FormInput from '@/types/FormInput'
import InputLabels from '@/types/InputLabels'

const inputs: FormInput[] = [
  {
    label: InputLabels.LOCATION,
    placeholder: '51.4822656,-0.1933769',
  },
  {
    label: InputLabels.DESTINATION,
    placeholder: '51.4994794,-0.1269979',
  },
]
const distance: Ref<string> = ref('')

function displayDistance(resultDistance: string) {
  distance.value = resultDistance
}

const ctx: any = useContext()
const { serviceLoader } = ctx
</script>

<template>
  <div class="main">
    <h2 class="form-base__title">Distance calculator</h2>
    <p>
      This app calculates for you distance between two locations. Fill below
      inputs with the longitude and latitude in below form and click submit
      button to see the results.
    </p>
    <FormBase
      :inputs="inputs"
      @distance="displayDistance"
    />
    <TheLoader v-if="serviceLoader.isVisible.value" />
    <span v-if="distance">
      The distance between is <b>{{ distance }}</b>
    </span>
    <p>
      <ImageMap class="map" />
    </p>
    <TheAllert class="main-allert"/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  width: 800px;
  position: relative;
  height:100%;
  margin-top:30px;
  &-allert {
    position: absolute;
    bottom: 15px;
    width: 100%;

  }
}
.map {
  width: 500px;
}
h2 {
  font-weight: 600;
  font-size: 2.4em;
}
p {
  font-size: 14px;
}
</style>
