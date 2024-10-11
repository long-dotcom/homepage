<template>
  <div id="app">
    <!-- Header Section -->
    <HeaderSection />

    <!-- About Section -->
    <AboutSection />

    <PersonalWebsiteSection />

    <!-- Footer Section -->
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from './components/Header.vue';
import AboutSection from './components/About.vue';
import PersonalWebsiteSection from './components/PersonalWebsite.vue';
import FooterSection from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    HeaderSection,
    AboutSection,
    PersonalWebsiteSection,
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
