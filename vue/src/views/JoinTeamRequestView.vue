<template>
<div class="join-team-request">
    <div id="join-team-request">
      
  <join-team-request-component></join-team-request-component>

  <div id="join-team-request">
    <router-link id="join-team-request" v-bind:to="{ name: 'join-team-request' }"
            ><button v-on:click="createTeamJoinRequest" class="btn btn-lg btn-primary btn-block" type="submit">
       Join Team
      </button></router-link>
      </div>
  </div>

</div>
</template>

<script>
import JoinTeamRequestComponent from '@/components/JoinTeamRequestComponent';

export default {
  components: {
    JoinTeamRequestComponent
  }
}
</script>


<style>
</style>