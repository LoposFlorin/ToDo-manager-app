<template>
  <div id="app">
      <md-button @click="addCard" class="md-primary">Add new task...</md-button>
      <ul>
        <li v-for="(card, index) in cards" v-bind:key="cards.id"><card /></li>
      </ul>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Card
  },
  data: function () {
    return {
      cards: [

      ],
      nextCardId: 1
    }
  },
  methods: {
    addCard: function () {
      console.log('test')
      this.cards.push(this.nextCardId++)
    }
  }
};
</script>

<style>
  body {
    height: 100%
  }

  #app {
    background: #eea;
  }

  ul {
    list-style-type: none;
  }
  
</style>
