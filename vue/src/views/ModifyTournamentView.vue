<template>
  <div class="modify-tournament">
    <!-- <h1>Update Tournament </h1> -->
    <!-- To display TournamentDetails, plus JoinTournamentsRequests,
   ModifyTournament and DeleteTournament options if user is host  -->

    <modify-tournament-component></modify-tournament-component>
    <delete-tournament-component></delete-tournament-component>
    <!-- <add-team-to-tournament-component></add-team-to-tournament-component> -->
  </div>
</template>

<script>

import DeleteTournamentComponent from "@/components/DeleteTournamentComponent";
import ModifyTournamentComponent from "@/components/ModifyTournamentComponent";
// import AddTeamToTournamentComponent from "@/components/AddTeamToTournamentComponent";


export default {
  components: {

    DeleteTournamentComponent,
    ModifyTournamentComponent,
    // AddTeamToTournamentComponent,


  },
};
</script>

<style>
</style>
