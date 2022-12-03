<script lang="ts" setup>
import FormBase from '@/components/ui/FormBase.vue'
import ImageMap from '@/assets/ImageMap.vue'
</script>

<template>
  <div>
   <FormBase form-tittle="Distance calculator"/>
   <ImageMap class="map" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map {
  width: 500px;
}
</style>
