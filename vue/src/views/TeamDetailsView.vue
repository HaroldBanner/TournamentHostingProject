<template>
  <div class="team-details-view">
    <!-- <h1>Team Details View</h1> -->
      <!-- To display TeamDetails Component, plus JoinTeamRequests, ModifyTeam + DeleteTeamMembers if user is captain -->
      <!-- <create-team-component></create-team-component> -->
      <!-- <modify-team-component></modify-team-component>
      <delete-team-component></delete-team-component> -->
      <join-team-requests-list-component></join-team-requests-list-component>
      <team-members-list-component></team-members-list-component>
      <tournaments-by-team-list-component></tournaments-by-team-list-component>
      <join-team-request-component></join-team-request-component>
  </div>
</template>

<script>
// import CreateTeamComponent from "@/components/CreateTeamComponent";
import JoinTeamRequestComponent from "@/components/JoinTeamRequestComponent";
import JoinTeamRequestsListComponent from "@/components/JoinTeamRequestsListComponent";
import TeamMembersListComponent from "@/components/TeamMembersListComponent";
// import DeleteTeamComponent from "@/components/DeleteTeamComponent";
// import ModifyTeamComponent from "@/components/ModifyTeamComponent";
import TournamentsByTeamListComponent from "@/components/TournamentsByTeamListComponent";


export default {
  // not sure how to pass $route.params, data() probably wrong/useless
  data () {
    return {
      teamId: this.$route.params.teamId,
    }
  },
  components: {

    JoinTeamRequestComponent,
    JoinTeamRequestsListComponent,
    TeamMembersListComponent, 

    TournamentsByTeamListComponent
  },
  created () {
    //can grab dynamic routing param here and pull from db using that parameter

    //when route param returns object, after .then

    // use response.data with this.$store.commit(SET_CURRENT_TEAM, pass in object to save)
  }
};
</script>

<style>
</style>
    JoinTeamRequestsListComponent