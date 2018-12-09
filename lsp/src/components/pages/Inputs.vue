<template lang="pug">
#dashboard.mt-3
  .container-fluid
    .row
      .col-md-12
        h2 Inputs
          button.btn.btn-outline-primary.ml-3 Create New
        .bs-callout.bs-callout-info
          | This page shows you all input endpoints currently available.
        InputLayout
</template>

<script>
  import InputLayout from '../_inputs/_InputLayout.vue';

  export default {
    components: {
      InputLayout
    }
  }
</script>

<style lang="scss">
</style>