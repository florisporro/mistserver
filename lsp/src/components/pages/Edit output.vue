<template lang="pug">
#editOutput.mt-3
  h2 Edit output filter
  form
    .form-group.row
      label Human readable name:
        input(type='text' v-model='name')
    button.btn.btn-primary Save
</template>

<script>
  
  export default {
    components: {
    },
    methods: {
      name
    }
  }
</script>

<style lang="scss">
</style>
