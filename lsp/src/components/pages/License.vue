<template lang="pug">
#dashboard.mt-3
  .container-fluid
    .row
      .col-md-12
        h2 License
        .bs-callout.bs-callout-info
          | This page tells you what your current license status is.
          br
          | You cannot make changes to your license here; this information is read-only.
          br
          | Please visit the MistServer website for more information.
        .alert.alert-danger Your license is about to transpire.
        .input-group
          span.input-group-prepend
            i.input-group-text.fas.fa-user
            span.input-group-text Licensed to:
          input#email.form-control(type='text' disabled value='DDVTech B.V.')
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
</style>
