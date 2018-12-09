<template lang="pug">
#dashboard.mt-3
  .container-fluid
    .row
      .col-md-12
        h2 Outputs
        p
          | Here be all the outputs and connection filters.
        AddButton output filter
        
        h3.mt-3 Current outputs
        
        .card-deck
          .card
            .card-body
              h5.card-title Output filter #1
              p.card-text A description
              EditButton output filter #1
</template>

<script>
  import EditButton from '../_utilities/EditButton';
  import AddButton from '../_utilities/AddButton';
  
  export default {
    components: {
      EditButton,
      AddButton
    }
  }
</script>

<style lang="scss">
</style>
