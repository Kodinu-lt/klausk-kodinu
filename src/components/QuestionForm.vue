<template>
  <form action="#" @submit.prevent="submitForm">
    <BField label="Klausimas">
      <BInput maxlength="1000" type="textarea" v-model="question"></BInput>
    </BField>
    <BButton type="is-primary" native-type="submit">Klausti</BButton>
  </form>
</template>

<script>
export default {
  name: "QuestionForm",
  data() {
    return {
      question: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Forma pateikta, klausimas yra: ", this.question);
    },
  },
};
</script>

<style scoped lang="scss"></style>
