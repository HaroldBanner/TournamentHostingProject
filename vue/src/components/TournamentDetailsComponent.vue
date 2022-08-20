<template>
  <div class="tournament-details">
    <h1>Tournament Details</h1>
    <!-- We route to this component or its own view through the links on the TeamsListComponent -->
    <table>
      <tr>
        <th>Host</th>
        <th>Tournament Name</th>
        <th>Sport</th>
        <th>Approval Required</th>
        <th>Date</th>
        <th>Max Teams</th>
        <th>Format</th>
        <th>Host Email</th>
        <th>Tournament City</th>
        <th>Tournament State</th>
        <th>Prize</th>
        <th>Winner</th>
      </tr>
      <tr>
        <td>{{ tournament.userName }}</td>
        <td>{{ tournament.tournamentName }}</td>
        <td>{{ tournament.sportName }}</td>
        <td>{{ tournament.approvalToJoin }}</td>
        <td>{{ new Date(tournament.tournamentTimestamp).toLocaleDateString() }}</td>
        <!-- <td>{{ new Date(tournament.tournamentTimestamp).toLocaleString() }}</td> Date, Time -->
        <td>{{ tournament.maxTeams }}</td>
        <td>{{ tournament.formatType }}</td>
        <td>{{ tournament.hostEmail }}</td>
        <td>{{ tournament.tournamentCity }}</td>
        <td>{{ tournament.tournamentStateAbbreviation }}</td>
        <td>{{ tournament.tournamentPrize }}</td>
        <td>{{ findTeamName(tournament) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import TournamentService from "../services/TournamentService";
import store from "../store/index"

export default {
  data() {
    return {
      tournament: [],
      message: "",
    };
  },
  created() {
    TournamentService.getTournamentById(this.$route.params.tournamentId).then((response) => {
      this.tournament = response.data;
    });
  },
  methods: {
    //tournament filter methods here
    findTeamName(tournament) {
      return store.state.team.find(
        (team) => team.teamId === tournament.tournamentWinner
      ).teamName;
    },
  },
};
</script>

<style></style>
