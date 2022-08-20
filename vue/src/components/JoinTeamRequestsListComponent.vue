  <template>
  <div class="join-team-requests-list">
    <h1>Team Join Requests</h1>
    <!-- We could display this component on the TeamDetails component/view if the logged in user is the team captain?  -->

    <div class="join-team-requests-list">
      <div class="join-team-request">
        <table>
          <tr>
            <th>Request Id</th>
            <th>Team Id</th>
            <th>User Id</th>
            <th>Status</th>
            <th>TimeStamp</th>
          </tr>
          <tr
            v-for="joinRequest in joinRequestList"
            v-bind:key="joinRequest.requestId"
          >
            <td>{{ joinRequest.requestId }}</td>
            <td>{{ joinRequest.teamId }}</td>
            <td>{{ joinRequest.userId }}</td>
            <td>{{ joinRequest.requestStatus }}</td>
            <td>{{ joinRequest.requestTimestamp }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import RequestJoinTeamService from "../services/RequestJoinTeamService";

export default {
  data() {
    return {
      joinRequestList: [],
      joinRequest: [],
      message: "",
    };
  },
  created() {
    RequestJoinTeamService.getAllTeamJoinRequests().then((response) => {
      this.joinRequestList = response.data;
    });
  },
};
</script>

<style>
</style>