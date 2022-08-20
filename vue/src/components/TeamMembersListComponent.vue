<template>
  <div class="team-members">
    <h1>
      <!-- <div class="logo">
        <img
          id="logo"
          src="ForAlltheMarblesLogo.png"
          alt="For All the Marbles + Logo"
        />
      </div> -->
      Team Members
    </h1>
    <div class="team-members-list">
      <div 
        class="team-member"
        v-for="user in userTeam" 
        v-bind:key="user.id">
        <table>
          <tr>
            <th>User ID</th>
            <th>Team ID</th>
          </tr>
          <tr>
            <td>{{ user.userId }}</td>
            <td>{{ user.teamId }}</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- We could display this in the TeamDetails component/view for any user who is
    a team member, or only the captain? -->
  </div>
</template>

<script>
import UserTeamsService from "../services/UserTeamsService";

// import {useRoute} from "vue-router";

export default {

  // more attemps at router params access
  // setup() {
  //   const route = useRoute();
  //   const teamId = route.params.teamId;
  // },

  data() {
    return {
      userTeam: [],
      user: [],
      message: "",
    };
  },
  // still not sure how to get $route.params.teamId in here
  created() {
    UserTeamsService.getTeamMembersListByTeamId(this.$route.params.teamId).then((response) => {
      this.userTeam = response.data;
    });
  }
};
</script>

<style>
</style>