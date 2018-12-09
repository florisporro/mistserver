<template lang="pug">
#outputs.mt-3
  .container-fluid
    .row
      .col-md-12
        h2 Outputs
        p
          | Here be all the outputs and connection filters.
        AddButton(data-toggle='modal' data-target='#editOutputWindow') output filter
        
        h3.mt-3 Current outputs
        
        .card-deck
          .card
            .card-body
              h5.card-title Output filter #1
              p.card-text A description
              EditButton(data-toggle='modal' data-target='#editOutputWindow') output filter #1
  .modal.fade#editOutputWindow(tabindex="-1" role="dialog")
    .modal-dialog(role='document')
      EditOutput.modal-content

</template>

<script>
  import EditButton from '../_utilities/EditButton';
  import AddButton from '../_utilities/AddButton';
  import EditOutput from './Edit output';
  
  export default {
    components: {
      EditButton,
      AddButton,
      EditOutput
    }
  }
</script>

<style lang="scss">
</style>
