<template>
  <auth-layout title="Inscription" :subtitle="subtitle" :left="left">
    <b-form class="form row" @submit.prevent="handler">
      <template v-if="step == 1">
        <div class="col-md-12">
          <div class="d-flex justify-content-center mb-md-2">
            <b-form-radio v-model="type" value="A">Entreprise</b-form-radio>
            <b-form-radio v-model="type" value="B" class="ml-3"
              >Particulier</b-form-radio
            >
          </div>
        </div>
        <div class="col-md-3">
          <b-input :placeholder="placeholders.name"></b-input>
        </div>
        <div class="col-md-3">
          <b-input :placeholder="placeholders.email"></b-input>
        </div>
        <div class="col-md-3">
          <b-input placeholder="mot de passe *"></b-input>
        </div>
        <div class="col-md-3">
          <b-input placeholder="confirmation mot de passe *"></b-input>
        </div>
      </template>
      <template v-else-if="step == 2">
        <div class="col-md-3">
          <b-form-select
            v-model="selected"
            :options="options"
            required
          ></b-form-select>
        </div>
        <div class="col-md-3">
          <b-input placeholder="mot de passe *"></b-input>
        </div>
        <div class="col-md-3">
          <b-input placeholder="mot de passe *"></b-input>
        </div>
        <div class="col-md-3">
          <b-input placeholder="mot de passe *"></b-input>
        </div>
      </template>
      <div class="col-md-12 mt-md-5">
        <b-button class="submitBtn rounded-circle mx-auto" type="submit"
          ><b-icon :icon="icon" variant="white"
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
  data() {
    return {
      subtitle: `
      Cher client, veuillez s'il vous plait renseigner les champs
          d'inscription<br />
          NB: Les champs obligatoires sont indiqués avec un astérisque (*).
      `,
      type: "A",
      step: 1,
      left: undefined,
      selected: null,
      options: [
        { value: null, text: "Niveau *" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  computed: {
    placeholders() {
      if (this.type == "B") {
        return {
          name: "nom complet *",
          email: "Email *",
        };
      } else {
        return {
          name: "nom complet de l'entreprise *",
          email: "Email de l'entreprise *",
        };
      }
    },
    icon() {
      return this.step == 1 ? "arrow-down" : "arrow-right";
    },
  },
  methods: {
    handler() {
      this.step = 2;
      this.left = "2/2";
    },
  },
};
</script>

<style lang="stylus" scoped>

// justify-content center
</style>
