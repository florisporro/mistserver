<template lang="pug">
.card.bg-light
  .card-header
    | {{ input.name }}
    span.ml-1.badge.badge-danger Error
    span.ml-1.badge.badge-info Triggers active
    button.btn.btn-sm.btn-outline-default
      i.fas.fa-edit
  .card-body
    p.card-text
      p Connected to source: {{ sources[0].name }}
      p Mode: {{ input.mode }}
        i.fas.ml-1(:class="modeIcon")
      p Transport: {{ input.transport }}
      button.btn.btn-sm.btn-outline-primary Copy Push URL
      button.btn.btn-sm.btn-outline-primary Copy stream key
</template>

<script>
export default {
  props: ['input'],
  computed: {
    sources() {
      return this.$store.state.sources
    },
    modeIcon() {
      if (this.input.mode === 'VOD') return 'fa-hdd'
      if (this.input.mode === 'PUSH') return 'fa-sign-in-alt'
      if (this.input.mode === 'PULL') return 'fa-sign-out-alt'
    }
  }
}
</script>

<style lang="scss">
</style>
