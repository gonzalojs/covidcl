<template>
  <div>
    <Top />
    <Boxes />
    <Tiles />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Tiles from "~/components/Tiles.vue";
import Boxes from "~/components/Boxes.vue";
import Top from "~/components/Top.vue";

export default {
  components: {
    Footer,
    Tiles,
    Boxes,
    Top
  }
};
</script>

<style>
</style>
