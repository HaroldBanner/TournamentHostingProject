<template>
  <div class="teams-view">
    <!-- <h1>Teams View</h1> -->
      <teams-list-component></teams-list-component>
      <div id="button container">
<router-link id="team-create" v-bind:to="{ name: 'team-create' }"
            ><button v-on:click="newTeam" class="btn btn-lg btn-primary btn-block" type="submit">
        Create Team
      </button></router-link>
        </div>
  </div>
</template>

<script>
import TeamsListComponent from '@/components/TeamsListComponent';

export default {
components: {
    TeamsListComponent
}
}
</script>

<style>

</style>