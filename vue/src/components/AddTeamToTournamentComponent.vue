<template>
  <div class="add-team-to-tournament">
      <h1>Add Team to Tournament</h1>
    <form class="add-team-to-tournament-form" v-on:submit.prevent="addTeamToTournament">
      <input type="number" v-model="teamTournament.teamId" />
      <label for="match-id">Team ID</label>
      <input type="number" v-model="teamTournament.tournamentId" />
      <label for="team-id">Tournament ID</label>
      <button class="btn btn-submit">Submit</button>
      <div class="success">{{ message }}</div>
    </form>
  </div>
</template>

<script>
import TeamTournamentService from "../services/TeamTournamentService";

export default {
  data() {
    return {
      teamTournament: {
        teamId: "",
        tournamentId: "",
      },
      message: "",
    };
  },
  methods: {
    addTeamToTournament() {
      TeamTournamentService.addTeamToTournament(this.teamTournament).then((response) => {
        return (this.message = response.status);
      });
    },
  },
}
</script>

<style>

</style>