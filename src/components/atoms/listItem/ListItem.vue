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
  }
})
</script>

<template>
  <dt class="list-item-label col-3">{{ label }}</dt>
  <dd v-if="description == 'Figma'" class="list-item-content col-9">{{ description }}
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
            fill="#1ABCFE"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
            fill="#0ACF83"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
            fill="#F24E1E"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"/>
    </svg>
  </dd>
  <dd v-else-if="description == 'GIT, HTML5 and CSS3'" class="list-item-content col-9">{{ description }}
    <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.84665 30.6998L4.84888 3.7373H28.8222L26.8244 30.6998L16.8355 33.9353L6.84665 30.6998Z"
            fill="#E44D26"/>
      <path d="M26.8244 5.89429H16.8355V32.3175L24.8267 29.6213L26.8244 5.89429Z" fill="#F16529"/>
      <path
          d="M10.3428 19.3756L9.3439 9.12988H24.8267L24.3272 12.3654H12.3406L12.84 16.1401H23.8278L22.8289 26.3859L16.8356 28.5429L10.8422 26.3859L10.3428 20.9934H13.3395L13.8389 23.6896L16.8356 24.7681L19.8322 23.6896L20.3317 19.3756H10.3428Z"
          fill="white"/>
    </svg>
    <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="css_3">
        <path id="vector" d="M6.91221 30.6213L4.91443 3.65881H28.8878L26.89 30.6213L16.9011 33.8568L6.91221 30.6213Z"
              fill="#1172B8"/>
        <path id="vector_2" d="M26.89 5.8158H16.9011V32.239L24.8922 29.5428L26.89 5.8158Z" fill="#33AADD"/>
        <path id="vector_3"
              d="M20.3972 19.2971H10.4083L9.90887 15.5223L17.9 12.8261H9.90887L9.40942 9.59058H24.8922L24.3928 13.3653L17.9 16.0616H23.8933L22.8944 26.3073L16.9011 28.4643L10.9078 26.3073L10.4083 20.9148H13.405L13.9044 23.6111L16.9011 24.6896L19.8978 23.6111L20.3972 19.2971Z"
              fill="white"/>
      </g>
    </svg>

  </dd>
  <dd v-else class="list-item-content col-9">{{ description }}</dd>
</template>


