<script setup>
import './list-item.scss'

defineProps({
  label: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})
</script>

<template>
  <dt class="list-item-label col-3">{{ label }}</dt>
  <dd class="list-item-content col-9">{{ description }}</dd>
</template>


