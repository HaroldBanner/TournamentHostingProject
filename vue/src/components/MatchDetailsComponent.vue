<template>
  <div class="match-details">
    <h1>Match Details</h1>
    <table>
      <tr>
        <th>Match ID</th>
        <th>Tournament</th>
        <th>Date and Time</th>
        <th>Address</th>
        <th>Winner</th>
        <th>Results</th>
      </tr>
      <tr>
        <td>{{ match.matchId }}</td>
        <td>{{ findTournamentName(match) }}</td>
        <td>{{ new Date(match.matchTimestamp).toLocaleString() }}</td>
        <td>{{ match.matchAddress }}</td>
        <td>{{ findTeamName(match) }}</td>
        <td>{{ match.results }}</td>
      </tr>
    </table>
    <!-- We'll need a call to backend to return team_matches for all teams with this
    match_id -->
  </div>
</template>

<script>
import MatchService from "../services/MatchService";
import store from "../store/index"

export default {
  data() {
    return {
      match: {},
      message: "",
    };
  },
  created() {
    MatchService.getMatchByMatchId(this.$route.params.matchId).then((response) => {
      this.match = response.data;
    });
  },
  methods: {
    findTournamentName(match) {
      return store.state.tournament.find(
        (tourn) => tourn.tournamentId === match.tournamentId
      ).tournamentName;
    },
    findTeamName(match) {
      return store.state.team.find(
        (team) => team.teamId === match.winningTeam
      ).teamName;
    },
  }
};
</script>

<style>
</style>