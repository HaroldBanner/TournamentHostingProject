<template>
  <div class="tournament-details">
    <!-- <h1>Tournament Details View</h1> -->
    <!-- To display TournamentDetails, plus JoinTournamentsRequests,
   ModifyTournament and DeleteTournament options if user is host  -->
    <tournament-details-component></tournament-details-component>

    <!-- Alex can't get this bracket builder to style in matching colors -->
    <bracket-builder-component></bracket-builder-component>
    <join-tournament-request-component></join-tournament-request-component>
    <!-- will need v-show for hostId match $store.state.user.userId -->
    <join-tournament-requests-list-component></join-tournament-requests-list-component>
    <teams-in-tournament-list-component></teams-in-tournament-list-component>
    <add-team-to-tournament-component></add-team-to-tournament-component>
  </div>
</template>

<script>

import JoinTournamentRequestComponent from "@/components/JoinTournamentRequestComponent.vue";
import JoinTournamentRequestsListComponent from "@/components/JoinTournamentRequestsListComponent";
import TournamentDetailsComponent from "@/components/TournamentDetailsComponent";
import AddTeamToTournamentComponent from "@/components/AddTeamToTournamentComponent";
import TeamsInTournamentListComponent from "@/components/TeamsInTournamentListComponent";
import BracketBuilderComponent from "@/components/BracketBuilderComponent";

export default {
  components: {
    JoinTournamentRequestComponent,
    JoinTournamentRequestsListComponent,
    TournamentDetailsComponent,
    AddTeamToTournamentComponent,
    TeamsInTournamentListComponent,
    BracketBuilderComponent,
  },
};
</script>

<style>
</style>