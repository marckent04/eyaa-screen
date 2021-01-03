<template>
  <div
    class="auth-wrap container-fluid"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="wrapper w-100 py-md-3">
      <div>
        <router-link tag="div" class="circle-box not-hover" to="/">
          <b-img :src="logo9" :style="{ width: '80%', height: '80%' }"></b-img>
        </router-link>
      </div>
      <div class="text-center my-md-5">
        <h1 v-html="title" v-if="title"></h1>
        <h2 class="h5" v-if="subtitle" v-html="subtitle"></h2>
      </div>
      <div class="w-100 row content">
        <div class="col-md-2 position-relative">
          <div class="circle-box position-absolute" @click="registerBtn">
            {{ left }}
          </div>
          <div class="little-circle-box top" @click="goToRegisterScreen">
            ok
          </div>
          <div class="little-circle-box bottom" @click="goToRegisterScreen">
            ok
          </div>
        </div>
        <div class="col-md-8 content">
          <slot></slot>
        </div>
        <div class="col-md-2 d-flex justify-content-end">
          <div class="circle-box" @click="goToLoginScreen">{{ right }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo9 from "../assets/logo (9).png";
import background from "../assets/bg.jpeg";
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    left: {
      type: String,
      default: "Inscription",
    },
    right: {
      type: String,
      default: "Connexion",
    },
  },
  data() {
    return {
      logo9,
      background,
      open: false,
    };
  },
  methods: {
    goToRegisterScreen() {
      this.$router.push({ name: "Register" });
    },
    goToLoginScreen() {
      this.$router.push({ name: "Login" });
    },
    openRegister() {
      let x = 80;
      let y = 50;
      let rotate = 360;
      const duration = 200;
      if (this.open) {
        x = 0;
        y = 0;
        rotate = 0;
      }
      this.open = !this.open;

      this.$anime({
        targets: ".little-circle-box.top",
        easing: "linear",
        translateX: x, // -> '250px'
        translateY: -y,
        rotate,
        duration,
      });

      this.$anime({
        targets: ".little-circle-box.bottom",
        easing: "linear",
        translateX: x, // -> '250px'
        translateY: y,
        rotate: 360,
        duration, // -> '540deg'
      });
    },
    registerBtn() {
      if (this.left === "Inscription") {
        this.openRegister();
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
vh-center(jc = center, ai = center)
  display flex
  justify-content jc
  align-items ai

.auth-wrap
    vh-center()
    position absolute
    height 100%
    width 100%
    background-size cover


  h1
    font-size 3em
    font-weight bolder
  .wrapper
    margin: 0 auto
    height 90%
    display flex
    align-items center
    flex-direction column
  .submitBtn
    background transparent !important
    border 1px solid white
    height 40px
    width 40px
    padding 0 !important
    text-align center
    vh-center()
    transition: transform 400ms
    &:hover
     transform scale(1.3)
     border-color white
     border-width 2px

  .circle-box
    color black
    font-size: .8em
    font-weight bold
    display: flex
    z-index 900 !important
    justify-content center
    align-items center
    height 100px
    width 100px
    background-color white
    border-radius 50%
    border-color rgba(0, 0, 0, 0.2)
    border-style solid
    border-width 14px
    position relative
    cursor pointer
    transition all 700ms
    &:hover:not(.not-hover)
      border-color #fff
      background-color #226674
      color #fff

  .little-circle-box
    position absolute
    top 30px
    left 30px
    z-index 400 !important
    size = 40px
    vh-center()
    transition all 700ms
    height size
    width size
    color black
    border-radius 50%
    background #fff
    cursor pointer
    &:hover
      border-color #226674
      background-color #226674
      color #fff
</style>
