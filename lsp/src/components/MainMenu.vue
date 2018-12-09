<template lang="pug">
#menu
  div#navigation.list-group.mb-3.mt-3
    MenuItem(page='/' icon="tachometer-alt") Dashboard
    MenuItem(page='/settings' icon="cogs") Settings
    MenuItem(page='/license' icon="file-invoice-dollar") License
    MenuItem(page='/updates' icon="download") Updates
    MenuItem(page='/log' icon="scroll") Log
    MenuItem(page='/statistics' icon="chart-line") Statistics

  div#navigation.list-group.mb-3.mt-3
    MenuItem(page='/sources' icon="video") Sources
    MenuItem(page='/inputs' icon="sign-in-alt") Inputs
    MenuItem(page='/processes' icon="blender") Processes
    MenuItem(page='/outputs' icon="sign-out-alt") Outputs
    MenuItem(page='/connections' icon="tv") Connections
    
  div#navigation.list-group.mb-3
    ExternalMenuItem(href="") Manual
    ExternalMenuItem(href="") Website
</template>

<script>
  import MenuItem from './_menu/_MenuItem';
  import ExternalMenuItem from './_menu/_ExternalMenuItem';

  export default {
    components: {
      MenuItem,
      ExternalMenuItem
    }
  }
</script>

<style lang="scss">
</style>