<template lang="pug">
#currentinputs
  .card-columns
    InputCard(v-for="(input, index) in inputs", :input="input", :key="index")
</template>

<script>
  import InputCard from './_InputCard.vue'

  export default {
    components: {
      InputCard
    },
    computed: {
      inputs() {
        return this.$store.state.inputs;
      }
    }
  }
</script>

<style lang="sass">

</style>
