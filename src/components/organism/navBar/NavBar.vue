<script setup>

import './nav-bar.scss'
</script>

<template>
  <nav class="navbar bg-secondary bg-opacity-75">
    <div class="container">
      <router-link to="/" class="navbar-brand">
<!--        <img alt="Dana logo" src="../../../assets/logo.svg" width="55"/>-->
          <div class="text-primary">DN</div>
      </router-link>
      <ul class="navbar-nav">
        <li class="nav-item" v-if="$route.name == 'about'">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-else-if="$route.name == 'home'">
          <router-link to="/about" class="nav-link">About me</router-link>
        </li>
        <li class="nav-item" v-else-if="$route.name == 'pizzaapp'">
          <router-link to="/" class="nav-link">Back</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


