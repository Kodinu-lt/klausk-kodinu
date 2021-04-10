<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <p class="title">Klausk Kodinu</p>
        <p class="subtitle">
          Puslapis kur žiūrovai, klausytojai ir skaitytojai galėtų užduoti
          klausimus apie programavimą ir stuff.
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <QuestionForm />
      </div>
    </section>
  </div>
</template>

<script>
import QuestionForm from "./components/QuestionForm.vue";

export default {
  name: "App",
  components: {
    QuestionForm,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
