<template>
  <div id="form-match-create" class="text-center">
    <form class="form-match-create" @submit.prevent="match-create">
      <h1 class="h3 mb-3 font-weight-normal">Create Match</h1>
      <label for="tournament-id" class="sr-only">Tournament ID</label>
      <input
        type="text"
        id="tournament-id"
        class="form-control"
        placeholder="Tournament ID"
        v-model="match.match_id"
        required
        autofocus
      />
      <br />
      <label for="match-timestamp" class="sr-only">Date and Time</label>
      <input
        type="text"
        id="match-timestamp"
        class="form-control"
        placeholder="Date and Time"
        v-model="match.matchTimestamp"
        required
      />
      <br />
      <label for="match-address" class="sr-only">Address</label>
      <input
        type="text"
        id="match-address"
        class="form-control"
        placeholder="Address"
        v-model="match.matchAddress"
        required
      />
      <br />
      <label for="winning-team" class="sr-only">Winner</label>
      <input
        type="text"
        id="winning-team"
        class="form-control"
        placeholder="Winner"
        v-model="match.winningTeam"
        
      />
      <br />
      <label for="results" class="sr-only">Result</label>
      <input
        type="text"
        id="results"
        class="form-control"
        placeholder="Result"
        v-model="match.results"
        
      />
      <br />
 
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Create Match
      </button>
    </form>
  </div>
</template>

<script>
import MatchService from "../services/MatchService";

export default {
  data() {
    return {
      match: {
        tournamentId: "",
        matchTimestamp: "",
        matchAddress: "",
        winningTeam: "",
        results: "",
      },
    };
  },
  methods: {
    createNewMatch() {
      MatchService.createMatch(this.match).then(response => {
        return (this.message = response.status);
      });
    },
  },
};
</script>

<style scoped>
#form-match-create{
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
  font-family: "Roboto", sans-serif;
}
.text-center .form-match-create {
  margin-top: 5%;
  font-family: "Roboto", sans-serif;
}
.form-match-create{
font-family: "Roboto", sans-serif;
  position: relative;
  z-index: 1;
  background: black #ffffff;
  max-width: 400px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  left: -52px;
}
.form-match-create input{
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form-match-create button {
  margin: 25px auto;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background-color: #ffb703;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}

#tournament-id {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}

#match-timestamp {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#match-address {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#winning-team {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#results {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}

</style>