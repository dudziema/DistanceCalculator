<script lang="ts" setup>
import { computed } from 'vue'
import { useContext } from '@/composables/context'
import ImageError from '@/assets/ImageError.vue'

const ctx: any = useContext()
const { serviceAlert } = ctx
const { alertConfig } = serviceAlert

const isVisible = computed(() => serviceAlert.isVisible.value)
</script>

<template>
  <div
    v-if="isVisible"
    class="alert"
  >
    <div
      v-for="(validationError, index) in alertConfig"
      :key="index"
      class="alert__error"
    >
      <ImageError class="alert__error-img" />

      <p>{{ validationError }}</p>
    </div>

    <div class="alert__border" />
  </div>
</template>

<style lang="scss" scoped>
.alert {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  font-size: $font-size-base $spacing-horizontal-small;
  padding: $spacing-vertical-small;
  position: relative;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  background-color: $color-background-main;
  border-color: $color-border-default;
  color: $color-text-error;
  box-shadow: 0 4px 15px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 4px 15px 0 rgba(0,0,0,.12);
  border-radius: 4px;

  &__error {
    display: flex;
    flex-direction: column;
    font-weight: $font-weight-semi-bold;
    width: 100%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: flex-start;

    &-img {
      width: 30px;
      margin: $spacing-vertical-default $spacing-horizontal-big;
    }
  }

  &__border {
    background-color: $color-background-error;
    border-color: $color-border-error;
    border-width: 4px;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    border-radius: inherit;
  }
}
</style>
