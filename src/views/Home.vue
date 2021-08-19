<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <add/>
  </div>
</template>

<script>
// @ is an alias to /src
import Add from '@/components/Add'
export default {
  name: "HomeComponent",
  components: {
    Add,
  },
};
</script>
