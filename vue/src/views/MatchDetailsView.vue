<template>
  <div class="match-details-view">
    <!-- <h1>Match Details View</h1> -->
    <match-details-component></match-details-component>
    <match-teams-list-component></match-teams-list-component>
    <!-- To display MatchDetails, plus Modify + Delete Match if user is tournament host -->
    <!-- <create-match-component></create-match-component> -->
    <!-- only display create for tournament hosts -->
    <add-team-to-match-component></add-team-to-match-component>
    <delete-match-component></delete-match-component>
  </div>
</template>

<script>
// import CreateMatchComponent from "@/components/CreateMatchComponent";
import MatchDetailsComponent from "@/components/MatchDetailsComponent";
import MatchTeamsListComponent from "@/components/MatchTeamsListComponent.vue";
import AddTeamToMatchComponent from '@/components/AddTeamToMatchComponent.vue';
import DeleteMatchComponent from "@/components/DeleteMatchComponent";

export default {
  data() {
    return {
      matchId: this.$route.params.matchId,
    };
  },
  components: {
    // CreateMatchComponent,
    MatchDetailsComponent,
    MatchTeamsListComponent,
    AddTeamToMatchComponent,
    DeleteMatchComponent
  },
};
</script>

<style>
</style>
