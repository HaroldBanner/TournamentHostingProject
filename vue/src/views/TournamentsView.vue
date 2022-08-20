<template>
  <div class="tournaments-view">
    <!-- <h1>Tournaments View</h1> -->
    <div id="tournament-create">

  </div>
      <tournaments-list-component></tournaments-list-component>
      <div id="button container">
<router-link id="tournament-create" v-bind:to="{ name: 'tournament-create' }"
            ><button v-on:click="newTournament" class="btn btn-lg btn-primary btn-block" type="submit">
        Create Tournament
      </button></router-link>
        </div>
  </div>
</template>

<script>
import TournamentsListComponent from '@/components/TournamentsListComponent';

export default {
components: {
    TournamentsListComponent
}
}
</script>

<style>

</style>