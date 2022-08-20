<template>
  <div class="matches-component">
    <h1>
      <div class="logo">
        <!-- <img
          id="logo"
          src="LogoSmall.png"
          alt="For All the Marbles + Logo"
        /> -->
      </div>
      Matches List
    </h1>
    <div class="matches-list">
      <table id="matches-list-table">
        <tr>
          <th>Match ID</th>
          <th>Tournament</th>
          <th>Match Timestamp</th>
          <th>Match Address</th>
          <th>Winner</th>
          <th>Results</th>
        </tr>
        <tr v-for="match in matches" v-bind:key="match.matchId">
          <td>
            <router-link
              v-bind:to="{
                name: 'match-details-view',
                params: { matchId: match.matchId },
              }"
              >{{ match.matchId }}</router-link
            >
          </td>
          <td>{{ findTournamentName(match) }}</td>
          <td>{{ new Date(match.matchTimestamp).toLocaleString() }}</td>
          <td>{{ match.matchAddress }}</td>
          <td>{{ findTeamName(match) }}</td>
          <td>{{ match.results }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import MatchService from "../services/MatchService";
import store from "../store/index";

export default {
  data() {
    return {
      matches: [],
      match: [],
      message: "",
    };
  },

  // pull all matches when landing on page?
  created() {
    MatchService.getMatches().then((response) => {
      this.matches = response.data;
    });
  },

  // will need buttons or something to call these
  methods: {
    getMatchByMatchId() {
      MatchService.getMatchByMatchId().then((response) => {
        this.match = response.data;
      });
    },
    getMatchesByTournamentId() {
      MatchService.getMatchesByTournamentId().then((response) => {
        this.matches = response.data;
      });
    },
    createMatch() {
      MatchService.createMatch().then((response) => {
        this.match = response.data;
        this.message = response.status;
        // will need to use message to display success/failure
        // probably want this to push to MatchDetails on success
      });
    },
    updateMatch() {
      MatchService.updateMatch().then((response) => {
        this.match = response.data;
      });
    },
    deleteMatch() {
      MatchService.deleteMatch().then((response) => {
        this.message = response.status;
      });
    },
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
  },
};
</script>

<style>
td {
  color: #e0fbfc;
}
</style>
