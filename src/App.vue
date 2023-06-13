<script setup>
import NavBar from "./components/organism/navBar/NavBar.vue"
import Footer from "./components/organism/footer/Footer.vue";
import './scss/custom.scss'
import router from "./router";

// data variables
const footer = {
  image: {
    url: "./images/footer-cropped.jpeg",
    alt: "Project image alt"
  }
};
</script>

<template>
  <div class="page-wrapper" :id="router.currentRoute.value.name">
    <Nav-bar/>
    <router-view/>
    <Footer :image="footer.image" title="GET IN TOUCH" email="DANA.C.HEIMANN@GMAIL.COM" phone="+34 658 68 86 37"/>
  </div>
</template>