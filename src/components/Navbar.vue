<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/#home",
    // active: route.path.startsWith("#home"),
    active: route.hash === "#home",
  },
  {
    label: "About",
    to: "/#about",
    active: route.hash === "#about",
  },
  {
    label: "Skill",
    to: "/#skill",
    active: route.hash === "#skill",
  },
  {
    label: "Project",
    to: "/#project",
    active: route.hash === "#project",
  },
  {
    label: "Contact",
    to: "/#contact",
    active: route.hash === "#contact",
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <a href="#">
        <h1
          class="text-black dark:text-white text-2xl"
          style="font-family: Kavoon"
        >
          TAU<span class="text-green-400">FIK</span>
        </h1>
      </a>
    </template>

    <!-- menu desktop -->
    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/taufikyogapratama"
          target="_blank"
          icon="i-simple-icons:github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <!-- menu mobile (muncul saat hamburger diklik) -->
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
