<script setup>
import {
  Activities,
  Footer,
  Header,
  Hero,
  Lessons,
  Technologies,
} from './containers';
</script>

<template>
  <div>
    <div>
      <Header />
      <Hero />
    </div>

    <Technologies />
    <Lessons />
    <Activities />
    <Footer />
  </div>
</template>

<style scoped></style>
