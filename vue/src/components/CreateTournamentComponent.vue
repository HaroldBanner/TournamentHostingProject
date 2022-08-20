<template>
  <div id="create-tournament" class="text-center">
    <!-- <form class="form-tournament-create" @submit.prevent="tournament - create"> -->
   <form class="create-tournament-form" v-on:submit.prevent="createNewTournament">
      <h1 class="h3 mb-3 font-weight-normal">Create Tournament</h1>
      <label for="host-id" class="sr-only">Host ID</label>
      <input
        type="text"
        id="host-id"
        class="form-control"
        placeholder="Host ID"
        v-model="tournament.hostId"
        required
        autofocus
      />
      <br />
      <label for="tournament-name" class="sr-only">Tournament Name</label>
      <input
        type="text"
        id="tournament-name"
        class="form-control"
        placeholder="Tournament Name"
        v-model="tournament.tournamentName"
        required
      />
      <br />
      <label for="sport-id" class="sr-only">Sport ID</label>
      <input
        type="number"
        id="sport-id"
        class="form-control"
        placeholder="Sport ID"
        v-model="tournament.sportId"
        required
      />
      <br />
      <label for="open-to-public" class="sr-only">Open To Public</label>
      <input
        type="checkbox"
        id="open-to-public"
        class="form-control"
        placeholder="Open To Public"
        v-model="tournament.approvalToJoin"
        required
      />
      <br />
      <label for="date-and-time" class="sr-only">Date and Time</label>
      <input
        type="datetime-local"
        id="date-and-time"
        class="form-control"
        placeholder="Date and Time"
        v-model="tournament.tournamentTimestamp"
        required
      />
      <br />
      <label for="max-teams" class="sr-only">Max Team #</label>
      <input
        type="number"
        id="max-teams"
        class="form-control"
        placeholder="Max Team #"
        v-model="tournament.maxTeams"
      />
      <br />
      <label for="format-id" class="sr-only">Format ID</label>
      <input
        type="number"
        id="format-id"
        class="form-control"
        placeholder="Format ID"
        v-model="tournament.formatId"
        required
      />
      <br />
      <label for="host-email" class="sr-only">Host Email</label>
      <input
        type="email"
        id="host-email"
        class="form-control"
        placeholder="Host Email"
        v-model="tournament.hostEmail"
        required
      />
      <br />
      <label for="city" class="sr-only">City</label>
      <input
        type="text"
        id="city"
        class="form-control"
        placeholder="City"
        v-model="tournament.tournamentCity"
        required
      />
      <br />
      <label for="state" class="sr-only">State</label>
      <input
        type="text"
        id="state"
        class="form-control"
        placeholder="State"
        v-model="tournament.tournamentStateAbbreviation"
        required
      />
      <br />
      <label for="prize" class="sr-only">Prize</label>
      <input
        type="text"
        id="prize"
        class="form-control"
        placeholder="Prize"
        v-model="tournament.tournamentPrize"
      />
      <br />
      <button class="btn btn-submit">Submit</button>
      <div class="success">{{ message }}</div>
      <!-- <button class="btn btn-lg btn-primary btn-block" type="submit">
        Create Tournament
      </button> -->
    </form>
  </div>
</template>

<script>
import TournamentService from "../services/TournamentService";

export default {
  data() {
    return {
      tournament: {
        hostId: "",
        tournamentName: "",
        sportId: "",
        approvalToJoin: "",
        tournamentTimestamp: "",
        maxTeams: "",
        formatId: "",
        hostEmail: "",
        tournamentCity: "",
        tournamentStateAbbreviation: "",
        tournamentPrize: "",
        tournamentWinner: "",
      },
    };
  },

  methods: {
    createNewTournament() {
      TournamentService.createTournament(this.tournament).then((response) => {
        return (this.message = response.status);
      });
    },
  },
};
</script>

<style scoped>
#create-tournament-form{
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
  font-family: "Roboto", sans-serif;
}
.text-center .create-tournament-form {
  margin-top: 5%;
  font-family: "Roboto", sans-serif;
}
.create-tournament-form{
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
.create-tournament-form input{
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
.create-tournament-form button {
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

#host-id {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}

#tournament-name {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#sport-id {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#open-to-public {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#date-and-time {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#max-teams {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#format-id {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#host-email {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#city {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#state {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#prize {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}

</style>




<!-- <h1>Create a new Tournament</h1>
    This could be a component in the Home view that would display after clicking a create tournament button
    or a separate CreateTournamentView, which do y'all think we'll want?
      <form class="create-tournament-form" v-on:submit.prevent="createNewTournament">
      <input type="number" v-model="tournament.tournamentId" /><label for="host-id"
        >Host ID</label>
        <input type="text" v-model="tournament.tournamentName" />
      <label for="tournament-name">Tournament Name</label>
      <input type="number" v-model="tournament.sportId" />
      <label for="sport-played">Sport Played</label>
      <input type="checkbox" v-model="tournament.approvalToJoin" /><label
        for="need-approval-to-join"
        >Need Approval to Join?</label
      >
      <input type="datetime-local" v-model="tournament.tournamentTimestamp" />
       <label for="tournament-timestamp">Tournament Date and Time</label>
      <input type="number" v-model="tournament.maxTeams" /><label for="max-teams"
        >Max Teams</label
      >
      <input type="number" v-model="tournament.formatId" />
      <label for="format-id">Format Id</label>
      <input type="email" v-model="tournament.hostEmail" /><label for="email"
        >Host Email</label
      >
      <input type="text" v-model="tournament.tournamentCity" /><label for="home-city"
        >Home City</label
      >
      <input type="text" v-model="tournament.tournamentStateAbbreviation" /><label
        for="home-state"
        >Home State</label
      >
       <input type="text" v-model="tournament.tournamentPrize" /><label
        for="tournament-prize"
        >Tournament Prize</label>

       <input type="number" v-model="tournament.tournamentWinner" /><label for="tournament-winner"
        >Number of Winner</label
      >

      <button class="btn btn-submit">Submit</button>
      <div class="success">{{ message }}</div>
    </form>

  </div> -->