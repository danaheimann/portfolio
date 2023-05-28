<script setup>
import './mast-head.scss'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
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
        <div class="row h-100 align-items-end">
          <div class="col-12 text-center">
            <h1>{{ title }}</h1>
            <p class="lead">{{ subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>


