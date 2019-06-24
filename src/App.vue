<template>
  <div id="app">
    <div>
      <AddButton></AddButton>
    </div>
  </div>
</template>

<script>
import AddButton from './components/AddButton.vue';

export default {
  name: 'app',
  components: {
    AddButton,
  },
};
</script>

<style>
  #app {
    background: #eea;
  }
</style>
