<template>
    <div class="delete-tournament">
      <h1>Delete Tournament</h1>
      <form class="delete-tournament-form" v-on:submit.prevent="deleteTournament">
      <input type="number" v-model="tournamentId" />
      <label for="tournament-id">Tournament Id</label>
      <button class="btn btn-submit">Submit</button>
      </form>
    </div>
</template>

<script>
import TournamentService from "../services/TournamentService";

export default {
  data() {
    return {
      tournamentId: "",
      message: "",
    };
  },
  methods: {
    deleteTournament() {
      TournamentService.deleteTournament(this.tournamentId).then((response) => {
        return (this.message = response.status);
      });
    },
  },
};
</script>

<style>
</style>