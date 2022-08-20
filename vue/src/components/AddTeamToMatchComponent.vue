<template>
  <div class="add-team-to-match">
    <h1>Add Team to Match</h1>
    <form class="add-team-to-match-form" v-on:submit.prevent="addTeamToMatch">
      <input type="number" v-model="teamMatch.matchId" />
      <label for="match-id">Match ID</label>
      <input type="number" v-model="teamMatch.teamId" />
      <label for="team-id">Team ID</label>
      <button class="btn btn-submit">Submit</button>
      <div class="success">{{ message }}</div>
    </form>
  </div>
</template>

<script>
import TeamMatchesService from "../services/TeamMatchesService";

export default {
  data() {
    return {
      teamMatch: {
        matchId: "",
        teamId: "",
      },
      message: "",
    };
  },
  methods: {
    addTeamToMatch() {
      TeamMatchesService.addTeamToMatch(this.teamMatch).then((response) => {
        return (this.message = response.data);
      });
    },
  },
};
</script>

<style>
</style>