<template>

<div id="team-create">
<create-team-component></create-team-component>

 <router-link id="team-create" v-bind:to="{ name: 'team-create' }"
            ><button v-on:click="newTeam" class="btn btn-lg btn-primary btn-block" type="submit">
        Create Team
      </button></router-link> 

  </div>
</template>

 <script>
import CreateTeamComponent from "@/components/CreateTeamComponent";


export default {
   //not sure should we add data return here
  //   data () {
  //   return {
  //     teamId: this.$route.params.teamId,
  //   }
  // },
 
  components: {
    CreateTeamComponent

  },
  methods: {
    newTeam (){ // call the service that talks to database where we route to the appropriate ID of the respective team
    }
  }
  };
</script>

<style>
</style>
