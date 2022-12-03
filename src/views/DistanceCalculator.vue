<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { useContext } from '@/composables/context'
import FormBase from '@/components/ui/FormBase.vue'
import TheLoader from '@/components/TheLoader.vue'
import TheAlert from '@/components/TheAlert.vue'
import ImageMap from '@/assets/ImageMap.vue'
import FormInput from '@/types/FormInput'
import InputLabels from '@/types/InputLabels'

const ctx: any = useContext()
const { serviceLoader } = ctx

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
</script>

<template>
  <div class="distance-calculator">
    <h2 class="distance-calculator__title">
      Distance calculator
    </h2>

    <p class="distance-calculator__info">
      This app calculates for you distance between two locations. Fill below
      inputs with the longitude and latitude in below form and click submit
      button to see the results.
    </p>

    <FormBase
      :inputs="inputs"
      @distance="displayDistance"
    />
    <div>
      <TheLoader v-if="serviceLoader.isVisible.value" />

      <p
        v-if="distance"
        class="distance-calculator__result"
      >
        The distance is equal <b>{{ distance }}</b>
      </p>
    </div>
    
    <ImageMap class="distance-calculator__map" />
    
    <TheAlert class="distance-calculator__alert" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.distance-calculator {
  height: 100%;
  width: 800px;
  margin-top: $spacing-vertical-big;

  &__title {
    font-weight: $font-weight-semi-bold;
    font-size: $font-size-title;
  }

  &__info {
    font-size: $font-size-base;
  }
  &__result {
    font-size: calc(1.5 * $font-size-large);
    margin: $spacing-vertical-default 0;
  }

  &__map {
    width: 500px;
  }

  &__alert {
    position: absolute;
    bottom: $spacing-vertical-default;
    width: 800px;
  }
}
</style>
