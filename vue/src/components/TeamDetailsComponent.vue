<template>
  <div class="team-details">
    <h1>Team Details</h1>
    <table v-for="item in teams" v-bind:key="item.teamId">
      <tr>
        <th>Team ID</th>
        <th>Captain ID</th>
        <th>Team Name</th>
        <th>Sport Played</th>
        <th>Open to New Members?</th>
        <th>Need Approval to Join?</th>
        <th>Max Members</th>
        <th>Team Email</th>
        <th>Team Home City</th>
        <th>Team Home State</th>
      </tr>
      <tr>
        <td>{{ item.teamId }}</td>
        <td>{{ item.captainId }}</td>
        <td>{{ item.teamName }}</td>
        <td>{{ item.sportId }}</td>
        <td>{{ item.teamOpenToNewMembers }}</td>
        <td>{{ item.approvalToJoin }}</td>
        <td>{{ item.maxMembers }}</td>
        <td>{{ item.teamEmail }}</td>
        <td>{{ item.teamCity }}</td>
        <td>{{ item.teamStateAbbreviation }}</td>
      </tr>
    </table>
    <!-- will need a table for team members?
    will need a table for matches? -->
  </div>
</template>

<script>
import TeamService from "../services/TeamService";

export default {
  data() {
    return {
      team: [],
      members: [],
      message: "",
    };
  },
  created() {
    TeamService.getTeamByTeamId().then((response) => {
      this.team = response.data;
    });
  },
};
</script>

<style>
</style>