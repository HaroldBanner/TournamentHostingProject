<template>
  <div class="delete-match">
      <h1>Delete Match</h1>
      <form class="delete-match-form" v-on:submit.prevent="deleteMatch">
      <input type="number" v-model="matchId" />
      <label for="match-id">Match Id</label>
      <button class="btn btn-submit">Submit</button>
      </form>
  </div>
</template>

<script>
import MatchService from "../services/MatchService";

export default {
  data() {
    return {
      matchId: "",
      message: "",
    };
  },
  methods: {
    deleteMatch() {
      MatchService.deleteMatch(this.matchId).then((response) => {
        return (this.message = response.status);
      });
    },
  },
};
</script>

<style>
</style>