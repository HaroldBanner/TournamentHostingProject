<template>
  <div class="join-tournament-requests-list">
    <h1>Tournament Join Request List</h1>
    <!-- We could display this component on the TournamentDetails component/view if
    the user is tournament host?-->
    <div class="join-tournament-request-list">
      <div class="join-tournament-request">
        <table>
          <tr>
            <th>Request Id</th>
            <th>Team Id</th>
            <th>Tournament Id</th>
            <th>Status</th>
            <th>TimeStamp</th>
          </tr>
          <tr
            v-for="joinRequest in joinRequestList"
            v-bind:key="joinRequest.requestId"
          >
            <td>{{ joinRequest.requestId }}</td>
            <td>{{ joinRequest.teamId }}</td>
            <td>{{ joinRequest.tournamentId }}</td>
            <td>{{ joinRequest.requestStatus }}</td>
            <td>{{ joinRequest.requestTimestamp }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import RequestJoinTournamentService from "../services/RequestJoinTournamentService";

export default {
  data() {
    return {
      joinRequestList: [],
      joinRequest: [],
      message: "",
    };
  },
  created() {
    RequestJoinTournamentService.getAllJoinTournamentRequests().then(
      (response) => {
        this.joinRequestList = response.data;
      }
    );
  },
};
</script>

<style>
</style>