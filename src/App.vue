<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color white
  .form-control
    color white
    text-align center
    background transparent !important

    &::placeholder
      color white
      text-align center

    &:input
      color white
      text-align center

.carousel-indicators
  bottom -25px !important

.custom-select
  background-color transparent !important
  color white !important
// vh-center()
//   display flex
//   justify-content center
//   align-items center
</style>
