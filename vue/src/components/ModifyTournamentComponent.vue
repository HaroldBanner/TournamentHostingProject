<template>
  <div class="modify-tournament">
    <!-- <h1>Modify Tournament</h1> -->
    <form
      class="modify-tournament-form"
      v-on:submit.prevent="modifyTournament"
    >
     <h1 class="h3 mb-3 font-weight-normal">Update Tournament</h1>
      <!-- <input type="number" v-model="tournament.tournamentId" /> -->
      <!-- <label for="tournament-id">TournamentId</label> -->
           <label for="tournament-id" class="sr-only">Tournament ID</label>
      <input
        type="text"
        id="tournament-id"
        class="form-control"
        placeholder="Tournament ID"
        v-model="tournament.TournamentId"
        required
        autofocus
      />
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
      <!-- <input type="text" v-model="tournament.tournamentName" /> -->
      <!-- <label for="tournament-name">Tournament Name</label> -->
          <label for="sport" class="sr-only">Sport</label>
      <input
        type="text"
        id="sport"
        class="form-control"
        placeholder="Sport"
        v-model="tournament.sport"
        required
      />
      <br />
      <!-- <input type="number" v-model="tournament.sportId" />
      <label for="sport-played">Sport Played</label> -->

 
     <label for="need-approval-to-join" class="sr-only">Need Approval to Join?</label>
      <input
        type="checkbox"
        id="need-approval-to-join"
        class="form-control"
        placeholder="Need Approval to Join?"
        v-model="tournament.approvalToJoin"
        required
      />
      <br />
           <!-- <input type="checkbox" v-model="tournament.approvalToJoin" /><label
        for="need-approval-to-join"
        >Need Approval to Join?</label
      > -->

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
      <!-- <input type="datetime-local" v-model="tournament.tournamentTimestamp" />
      <label for="tournament-timestamp">Tournament Date and Time</label> -->
         <label for="max-teams" class="sr-only">Max Team #</label>
      <input
        type="number"
        id="max-teams"
        class="form-control"
        placeholder="Max Team #"
        v-model="tournament.maxTeams"
      />
      <br />
      <!-- <input type="number" v-model="tournament.maxTeams" /><label
        for="max-teams"
        >Max Teams</label
      > -->
           <label for="format-id" class="sr-only">Format ID</label>
      <input
        type="number"
        id="format-id"
        class="form-control"
        placeholder="Format ID"
        v-model="tournament.formatId"
        required
      />
      <!-- <input type="number" v-model="tournament.formatId" />
      <label for="format-id">Format Id</label> -->
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
      <!-- <input type="email" v-model="tournament.hostEmail" /><label for="email"
        >Host Email</label
      > -->
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
      <!-- <input type="text" v-model="tournament.tournamentCity" /><label
        for="home-city"
        >Home City</label
      > -->
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
      <!-- <input
        type="text"
        v-model="tournament.tournamentStateAbbreviation"
      /><label for="home-state">Home State</label> -->
            <label for="prize" class="sr-only">Prize</label>
      <input
        type="text"
        id="prize"
        class="form-control"
        placeholder="Prize"
        v-model="tournament.tournamentPrize"
      />
      <br />
      <!-- <input type="text" v-model="tournament.tournamentPrize" /><label
        for="tournament-prize"
        >Tournament Prize</label
      > -->
           <label for="tournament-winner" class="sr-only">Number of Winner</label>
      <input
        type="number"
        id="tournament-winner"
        class="form-control"
        placeholder="Number of Winner"
        v-model="tournament.tournamentWinner"
        required
      />
      <!-- <input type="number" v-model="tournament.tournamentWinner" /><label
        for="tournament-winner"
        >Number of Winner</label
      > -->

      <button class="btn btn-submit">Submit</button>
      <div class="success">{{ message }}</div>
    </form>
  </div>
</template>

<script>
import TournamentService from "../services/TournamentService";

export default {
  data() {
    return {
      tournament: {
        tournamentId: "",
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
      message: "",
    };
  },
  methods: {
    modifyTournament() {
      TournamentService.updateTournament(this.tournament).then(response => {
        return (this.message = response.status);
      });
    },
  },
};
</script>

<style>
#modify-tournament-form{
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
  font-family: "Roboto", sans-serif;
}
.text-center .modify-tournament-form {
  margin-top: 5%;
  font-family: "Roboto", sans-serif;
}
.modify-tournament-form{
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
.modify-tournament-form input{
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
.modify-tournament-form button {
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
#sport {
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
#tournament-winner {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}

</style>