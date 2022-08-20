<template>
  <div class="modify-team">
      <modify-team-component></modify-team-component>
      <delete-team-component></delete-team-component>
  </div>
</template>

<script>
import DeleteTeamComponent from "@/components/DeleteTeamComponent";
import ModifyTeamComponent from "@/components/ModifyTeamComponent";



export default {
  // not sure how to pass $route.params, data() probably wrong/useless
  data () {
    return {
      teamId: this.$route.params.teamId,
    }
  },
  components: {

    DeleteTeamComponent,
    ModifyTeamComponent,

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
