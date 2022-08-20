<template>
  <div>
    <h1>Tournament Teams</h1>
    <div class="tournament-teams-list">
      <table>
        <tr>
          <th>Team ID</th>
          <th>Tournament ID</th>
        </tr>
        <tr v-for="item in tournamentTeams" v-bind:key="item.teamId">
          <td>{{ item.teamId }}</td>
          <td>{{ item.tournamentId }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import TeamTournamentService from "../services/TeamTournamentService";
import store from "../store/index";

export default {
  data() {
    return {
      tournamentTeams: [],
    };
  },
  created() {
    TeamTournamentService.getTeamsInTournament(
      this.$route.params.tournamentId
    ).then((response) => {
      this.tournamentTeams = response.data;
    });
  },
  methods: {
    findTournamentName(teamTournament) {
      return store.state.tournament.find(
        (tourn) => tourn.tournamentId === teamTournament.tournamentId
      ).tournamentName;
    },
    findTeamName(teamTournament) {
      return store.state.team.find(
        (team) => team.teamId === teamTournament.teamId
      ).teamName;
    },
  }
};
</script>

<style>
</style>