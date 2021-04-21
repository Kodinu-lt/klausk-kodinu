<template>
  <form action="#" @submit.prevent="submitForm">
    <BField label="Klausimas">
      <BInput maxlength="1000" type="textarea" v-model="question"></BInput>
    </BField>
    <BButton type="is-info" native-type="submit" :loading="isLoading"
      >Klausti</BButton
    >
  </form>
</template>

<script>
export default {
  name: "QuestionForm",
  data() {
    return {
      question: "",
      isLoading: false,
    };
  },
  methods: {
    submitForm() {
      this.isLoading = true;

      this.$db
        .collection("questions")
        .add({ text: this.question })
        .then(() => {
          this.$buefy.toast.open({
            message: "Ačiū už klausimą!",
            type: "is-success",
          });

          this.isLoading = false;
          this.question = "";
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
          this.$buefy.toast.open({
            message: "O nee, kažkas nutiko",
            type: "is-warning",
          });
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
