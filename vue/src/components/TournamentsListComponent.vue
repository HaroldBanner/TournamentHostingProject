<template>
  <div class="tournaments-component">
    <h1>
      <!-- <div class="logo">
        <img id="logo" src="LogoSmall.png" alt="For All the Marbles + Logo" />
      </div> -->
      Tournaments List
    </h1>

    <div class="tournaments-list">
      <div class="tournament">
        <div class="table">
          <table>
            <tr>
              <th>Tournament</th>
              <!-- <th>Host ID</th> -->
              <!-- <th>Tournament Name</th> -->
              <th>Sport</th>
              <th>Private</th>
              <th>Start Date</th>
              <th>Max Teams</th>
              <th>Format </th>
              <th>Host Email</th>
              <th>City</th>
              <th>State</th>
              <th>Prize</th>
              <th>Winner</th>
            </tr>
            <tr
              v-for="tournament in tournaments"
              v-bind:key="tournament.tournamentId"
            >
              <td>
                <router-link
                  v-bind:to="{
                    name: 'tournament-details-view',
                    params: { tournamentId: tournament.tournamentId },
                  }"
                  >{{ tournament.tournamentName }}</router-link
                >
              </td>
              <!-- <td>{{ tournament.hostId }}</td> -->
              <!-- <td>{{ tournament.tournamentName }}</td> -->
              <td>{{ tournament.sportName }}</td>
              <td>{{ tournament.approvalToJoin }}</td>
              <td>{{  new Date(tournament.tournamentTimestamp).toLocaleDateString() }}</td>
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
      </div>
    </div>
  </div>
</template>

<script>
import TournamentService from "../services/TournamentService";
import store from "../store/index"

export default {
  data() {
    return {
      tournaments: [],
      tournament: [],
      message: "",
    };
  },
  created() {
    TournamentService.getTournaments().then((response) => {
      this.tournaments = response.data;
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

<style>
h1 {
  margin-top: 5%;
}

/* #logo {
  max-width: 20%;
  max-height: 20%;
} */

div.table {
  resize: both;
  overflow: auto;
}

td,
th {
  border: #ffb703 1px;
  text-align: left;
  padding: 10px;
  /* width: 1px; */
  white-space: nowrap;
  overflow: auto;
}

th {
  text-transform: uppercase;
  background-color: #ffb703;
  color: #023047;
}
td {
  padding: 20px;
  color: #e0fbfc;
}
</style>