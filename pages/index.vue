<template>
  <div>
    <Top />
    <Tiles />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Tiles from "~/components/Tiles.vue";
import Top from "~/components/Top.vue";

export default {
  components: {
    Footer,
    Tiles,
    Top
  }
};
</script>

<style>
</style>
