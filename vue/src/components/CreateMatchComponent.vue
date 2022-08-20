=
<template>
<createMatch>
<div id="match-create">
<router-link id="tournament-create" v-bind:to="{ name: 'match-create' }"
            ><button v-on:click="newMatch" class="btn btn-lg btn-primary btn-block" type="submit">
        Create Match
      </button></router-link>
  </div>
</createMatch>
</template>

 <script>
import createMatch from "../views/CreateMatchView.vue"
export default {
  name: "Create Match",
  components: {
    createMatch
  },
  methods: {
    newMatch (){ // call the service that talks to database where we route to the appropriate ID of the respective match
    }
  }
  };
</script>