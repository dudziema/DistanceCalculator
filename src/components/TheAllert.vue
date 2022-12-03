<script lang="ts" setup>
import {ref, onMounted, computed, watchEffect} from 'vue'
import ImageError from '@/assets/ImageError.vue'
import { useContext } from '@/composables/context'

const ctx: any = useContext()
const { serviceAllert } = ctx
const { allertConfig } = serviceAllert

const isVisible = computed(() => serviceAllert.isVisible.value)
</script>

<template>
  <div
    v-if="isVisible"
    class="allert"
  >
    <div
      v-for="(validationError, index) in allertConfig"
      :key="index"
      class="allert-error"
    >
      <ImageError class="allert-img" />
      <p>{{validationError}}</p>
    </div><br/>
    <div class="allert-border" />
  </div>
</template>

<style lang="scss" scoped>
.allert {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  margin-bottom: 16px;
  padding: 8px;
  position: relative;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  background-color: #fff;
  border-color: rgb(57, 3, 195);
  color:red;
  box-shadow: 0 4px 15px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 4px 15px 0 rgba(0,0,0,.12);
  border-radius: 4px;

  &-error {
    display: flex;
    flex-direction: column;
    font-weight:600;
    width:100%;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: flex-start;

  }

  &-border {
    background-color: #ff5252;
    border-color: #ff5252;
    border-width: 4px;
    content: "";
    position: absolute;
    right: 0;
    top:0;
    bottom: 0;
    width: 8px;
    border-radius: inherit;
  }

  &-img {
    width: 40px;
    margin:10px;
  }
}
</style>
