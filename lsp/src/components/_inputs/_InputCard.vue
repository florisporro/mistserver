<template lang="pug">
.card.bg-light
  .card-header
    | {{ input.name }}
  .card-body
    p.card-text
      p Connected to source: {{ sources[0].name }}
      p Mode: {{ input.mode }}
        i.fas.ml-1(:class="modeIcon")
      p Transport: {{ input.transport }}
      .input-group.mb-3
        input.form-control(readonly, :placeholder="`${settings.server}live/`")
        .input-group-append
          button.btn.btn-sm.btn-outline-primary Copy Push URL
      
      .input-group.mb-3
        input.form-control(readonly, :placeholder="input.streamname")
        .input-group-append
          button.btn.btn-sm.btn-outline-primary Copy stream key
</template>

<script>
export default {
  props: ['input'],
  computed: {
    sources() {
      return this.$store.state.sources
    },
    settings() {
      return this.$store.state.settings
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
