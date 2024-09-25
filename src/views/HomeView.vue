<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import IntroSection from "@/components/IntroSection.vue";
import SearchItem from "@/components/SearchItem.vue";
import AdvancedStats from "@/components/AdvancedStats.vue";
import BoostSection from "@/components/BoostSection.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="container">
    <Navbar />
    <IntroSection />
    <SearchItem />
  </div>

  <AdvancedStats />
  <BoostSection />
  <Footer />
</template>
