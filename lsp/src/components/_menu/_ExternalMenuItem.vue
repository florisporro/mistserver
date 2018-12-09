<template lang="pug">
a(:href="href" target="_blank").list-group-item.list-group-item-action
  i.fas.fa-fw.fa-link.mt-1.mr-2
  slot
</template>

<script>
  export default {
    props: ['href']
  }
</script>

<style lang="scss">
  
</style>