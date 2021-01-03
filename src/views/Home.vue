<template>
  <auth-layout>
    <b-carousel
      id="home-slider"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="i in 3" :key="i">
        <template #img>
          <div class="fadeInDown">
            <h1 class="text-center">eeyaa</h1>
            <p class="text-center subtitle">
              Entrez dans l'ère du participatif
            </p>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </auth-layout>
</template>

<script>
import AuthLayout from "../layouts/auth.vue";

export default {
  components: {
    AuthLayout,
  },
};
</script>

<style lang="stylus" scoped>
.carousel, .carousel-item
  background transparent !important

h1
  font-size 6em

.subtitle
  font-size 2.4em

.carousel-indicators
  margin-top 15px
</style>
