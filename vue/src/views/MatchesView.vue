<template>
  <div class="matches-view">
    <!-- <h1>Matches View</h1> -->
    <matches-list-component></matches-list-component>
     <div id="button container">
<router-link id="match-create" v-bind:to="{ name: 'match-create' }"
            ><button v-on:click="newMatch" class="btn btn-lg btn-primary btn-block" type="submit">
        Create Match
      </button></router-link>
        </div>
  </div>
</template>

<script>
import MatchesListComponent from "@/components/MatchesListComponent";

export default {
  components: {
    MatchesListComponent,
  },
};
</script>

<style>
</style>