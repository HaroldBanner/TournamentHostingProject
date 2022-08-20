<template>
  <div class="match-teams">
      <h1>Match Teams</h1>
      <div class="match-teams-list">
      <table>
          <tr>
              <th>Match ID</th>
              <th>Team ID</th>
          </tr>
          <tr v-for="item in matchTeams"
          v-bind:key="item.teamId">
              <td>{{item.matchId}}</td>
              <td>{{findTeamName(item.teamId)}}</td>
          </tr>
      </table>
      </div>
  </div>
</template>

<script>
import TeamMatchesService from "../services/TeamMatchesService";
import store from "../store/index";

export default {
  data() {
    return {
      matchTeams: [],
    };
  },
  methods: {
    findTeamName(teamId) {
      return store.state.team.find(
        (team) => teamId === team.teamId
      ).teamName;
    },
  },
  created() {
    TeamMatchesService.getTeamsPlayingInThisMatch(
      this.$route.params.matchId
    ).then((response) => {
      this.matchTeams = response.data;
    });
  },
};
</script>

<style>
</style>