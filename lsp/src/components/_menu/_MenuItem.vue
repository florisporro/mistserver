<template lang="pug">
router-link(:to='page').list-group-item.list-group-item-action
  i.fas.fa-fw(:class="fa_icon").mt-1.mr-2
  slot
</template>

<script>
  export default {
    props: ['page', 'icon'],
    computed: {
      fa_icon() {
        return "fa-" + this.icon;
      }
    }
  }
</script>

<style lang="scss">
</style>