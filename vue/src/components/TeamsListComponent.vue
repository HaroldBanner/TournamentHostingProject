<template>
  <div class="teams-component">
    <h1>
      <div class="logo">
        <!-- <img
          id="logo"
          src="LogoSmall.png"
          alt="For All the Marbles + Logo"
        /> -->
      </div>
      Teams List
    </h1>

    <div class="teams-list">
      <!-- displays all teams in database -->
      <div class="team">
        <!-- teamId will be a link to the TeamDetails component for that team -->
        
        <table id="teams-list-table">
          <tr>
            <!-- <th>Team ID</th>
            <th>Captain ID</th> -->
            <th>Team Name</th>
            <th>Sport</th>
            <th>Open to New Members?</th>
            <th>Need Approval to Join?</th>
            <th>Max Members</th>
            <th>Team Email</th>
            <th>Team Home City</th>
            <th>Team Home State</th>
          </tr>
          <tr v-for="team in teams" v-bind:key="team.teamId">
            <td><router-link
          v-bind:to="{
            name: 'team-details-view',
            params: { teamId: team.teamId },
          }"
          >{{ team.teamName }}</router-link
        ></td>
            <!-- <td>{{ team.captainId }}</td>
            <td>{{ team.teamName }}</td> -->
            <td>{{ findSportName(team) }}</td>
            <td>{{ team.teamOpenToNewMembers }}</td>
            <td>{{ team.approvalToJoin }}</td>
            <td>{{ team.maxMembers }}</td>
            <td>{{ team.teamEmail }}</td>
            <td>{{ team.teamCity }}</td>
            <td>{{ team.teamStateAbbreviation }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TeamService from "../services/TeamService";
import store from "../store/index"


export default {
  data() {
    return {
      teams: [],
      team: [],
      message: "",
      teamId: this.$route.params.teamId,
    };
  },
  created() {
    TeamService.getTeams(this.teamId).then((response) => {
      this.teams = response.data;
    });
  },
  // will need buttons or something to call these
  methods: {
    getTeamByCaptainId() {
      TeamService.getTeamByCaptainId().then((response) => {
        this.teams = response.data;
      });
    },
    getTeamByTeamId() {
      TeamService.getTeamByTeamId().then((response) => {
        this.team = response.data;
        // probably want this to push to TeamDetails
      });
    },
    getTeamByTeamName() {
      TeamService.getTeamByTeamName().then((response) => {
        this.team = response.data;
        // probably want this to push to TeamDetails
      });
    },
    createTeam() {
      TeamService.createTeam().then((response) => {
        this.team = response.data;
        this.message = response.status;
        // will need to use message to display success/failure
        // probably want this to push to TeamDetails on success
      });
    },
    deleteTeam() {
      TeamService.deleteTeam().then((response) => {
        this.message = response.status;
        // will need to use message to display success/failure
      });
    },
    findSportName(team) {
      return store.state.sport.find(
        (sport) => sport.sportId === team.sportId
      ).sportName;
    },
  },
};
</script>

<style>
div {
  font-family: "Roboto", sans-serif;

}

/* #logo {
  max-width: 200%;
  max-height: 200%;
  SW - this currently doesn't do anything so commenting out for now
} */

table {
  margin-top: 20px;
  font-family: sans-serif;
  margin-bottom: 20px;
}

td,
th {
  border: #ffb703 1px;
  text-align: left;
  padding: 8px;
}

th {
  text-transform: uppercase;
  background-color: #ffb703;
  color: #023047;
}
td {
  padding: 10px;
}
</style>