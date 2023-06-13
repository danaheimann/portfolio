<script setup>
import './mast-head.scss'

const props = defineProps({
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  image: {
    type: String,
    required: true
  }
})

const imageStyle = "background-image: url('" + props.image + "');";
</script>

<template>
  <!-- Full Page Image Header with Vertically Centered Content -->
  <header class="masthead" :style="imageStyle">
    <div class="masthead-filter h-100">
      <div class="container h-100">
        <div class="row h-100 align-items-end text-primary">
          <div class="col-12 text-center mb-3">
            <h1 class="p-0">{{ title }}</h1>
            <p class="lead p-0">{{ subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>


