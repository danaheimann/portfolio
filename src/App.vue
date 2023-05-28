<script setup>
import NavBar from "./components/organism/navBar/NavBar.vue"
import Footer from "./components/organism/footer/Footer.vue";
import './scss/custom.scss'

// data variables
const footer = {
  image: {
    url: "/images/footer-cropped.jpeg",
    alt: "Project image alt"
  }
};


</script>

<template>
  <Nav-bar/>
  <router-view/>
  <Footer :image="footer.image" title="Get in touch" email="DANA.C.HEIMANN@GMAIL.COM" phone="+34 658 68 86 37"/>
</template>