<template>
  <div class="delete-team">
    <h1>Delete Team</h1>
    <form class="delete-team-form" v-on:submit.prevent="deleteTeam">
      <input type="number" 
      placeholder="Team ID"
      v-model="teamId" />
      <button class="btn btn-submit">Submit</button>
      <div class="success">{{ message }}</div>
    </form>
  </div>
</template>

<script>
import TeamService from "../services/TeamService";

export default {
  data() {
    return {
      teamId: "",
      message: "",
    };
  },
  methods: {
    deleteTeam() {
      TeamService.deleteTeam(this.teamId).then(response => {
          return (this.message = response.status);
      })
    },
  },
};
</script>

<style>

#delete-team {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>