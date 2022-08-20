<template>
  <div>
    <h1>Team Tournaments</h1>
    <div class="team-tournaments-list">
      <table>
        <tr>
          <th>Team ID</th>
          <th>Tournament ID</th>
        </tr>
        <tr v-for="item in teamTournaments" v-bind:key="item.tournamentId">
          <td>{{ item.teamId }}</td>
          <td>{{ item.tournamentId }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import TeamTournamentService from "../services/TeamTournamentService";

export default {
  data() {
    return {
      teamTournaments: [],
    };
  },
  created() {
    TeamTournamentService.getTournamentsByTeam(
      this.$route.params.teamId
    ).then((response) => {
      this.teamTournaments = response.data;
    });
  },
};
</script>

<style>
</style>