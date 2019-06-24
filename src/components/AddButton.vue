<template>
  <div>
    <div class="hello">
      <md-button class="md-primary">Add new task...</md-button>
    </div>
    <card></card>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'AddButton',
  components: {
    Card,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-primary {
    border: 1px solid blue;
  }
</style>
