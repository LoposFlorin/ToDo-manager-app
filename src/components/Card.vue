<template>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Card with hover effect</div>
          <div class="md-subhead">It also have a ripple</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
</template>

<script>
export default {
    name: 'Card',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .md-card {
        margin-top: 1rem;
        margin-left: 1rem;
        width: 300px;
    }
</style>
