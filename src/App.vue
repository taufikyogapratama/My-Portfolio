<script setup lang="ts">
import AboutMe from "./components/AboutMe.vue";
import ContactMe from "./components/ContactMe.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Project from "./components/Project.vue";
import Skill from "./components/Skill.vue";
</script>

<template>
  <UApp>
    <Navbar />
    <Home />
    <AboutMe />
    <Skill />
    <Project />
    <ContactMe />
  </UApp>
</template>
