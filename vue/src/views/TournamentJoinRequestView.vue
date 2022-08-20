<template>
  <div class="tournament-join-request-view">
    <div id="join-tournament-request">
<router-link id="join-tournament-request" v-bind:to="{ name: 'join-tournament-request' }"
            ><button v-on:click="createTournamentJoinRequest" class="btn btn-lg btn-primary btn-block" type="submit">
        Join Tournament
      </button></router-link>
  </div>
      <!-- <tournaments-list-component></tournaments-list-component> -->
        <join-tournament-request-component> </join-tournament-request-component>
      
  </div>
</template>

<script>
// import TournamentsListComponent from '@/components/TournamentsListComponent';
import JoinTournamentRequestComponent from '@/components/JoinTournamentRequestComponent';

export default {
components: {
    // TournamentsListComponent
    JoinTournamentRequestComponent
}
}
</script>

<style>

</style>