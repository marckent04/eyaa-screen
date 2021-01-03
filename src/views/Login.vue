<template>
  <auth-layout
    title="Connexion"
    subtitle="Veuillez s'il vous plait renseigner les champs de connexion"
  >
    <b-form @submit.prevent="loginHandler" class="form row">
      <div class="col-md-6">
        <b-input placeholder="connexioneyaa@eyaa.com"></b-input>
        <b-form-checkbox
          name="remember"
          value="remember"
          unchecked-value="not_remember"
        >
          Se souvenir de moi
        </b-form-checkbox>
      </div>
      <div class="col-md-6 align-items-end">
        <b-input placeholder="***********"></b-input>
        <a>mot de passe oublié ?</a>
      </div>
      <div class="col-md-12 mt-md-5">
        <b-button class="submitBtn rounded-circle mx-auto" type="submit"
          ><b-icon icon="arrow-right" variant="white"
        /></b-button>
      </div>
    </b-form>
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
