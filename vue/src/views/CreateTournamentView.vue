<template>
<!-- <createTournament> -->
<div id="create-tournament">
  <create-tournament-component></create-tournament-component>
  
<!-- <router-link id="tournament-create" v-bind:to="{ name: 'tournament-create' }"
            ><button v-on:click="newTournament" class="btn btn-lg btn-primary btn-block" type="submit">
        Create Tournament
      </button></router-link> -->
  </div>
<!-- </createTournament> -->
</template>

 <script>
import CreateTournamentComponent from "@/components/CreateTournamentComponent";

export default {
  name: "create-tournament",
  components: {
    CreateTournamentComponent 
  },
  methods: {
    newTournament (){ // call the service that talks to database where we route to the appropriate ID of the respective tournament
    }
  }
  };
</script>

<style>
</style>