<template>
  <div id="app">
    <!-- Header Section -->
    <HeaderSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Call to Action Section -->
    <CallToActionSection />

    <!-- Footer Section -->
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from './components/Header.vue';
import AboutSection from './components/About.vue';
import ServicesSection from './components/Services.vue';
import CallToActionSection from './components/CallToAction.vue';
import FooterSection from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    AboutSection,
    ServicesSection,
    CallToActionSection,
    FooterSection,
  },
};
</script>

<style>
@import './assets/css/animate.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/default.css';
@import './assets/css/lineicons.css';
@import './assets/css/style.css';
@import "./assets/css/iconfont.css";
</style>
