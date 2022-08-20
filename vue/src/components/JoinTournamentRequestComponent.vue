<template>

  <div class="join-tournament-request">
     <!-- <h1>Create Join Tournament Request</h1> -->
      <div id="join-tournament-request" class="text-center">
           <form class="join-tournament-request-from" v-on:submit.prevent="joinTournamentRequest">
         <!-- <form class="join-tournament-request-from" @submit.prevent="tournament - create"> -->
   
      <h1 class="h3 mb-3 font-weight-normal">Join Tournament</h1>
      <label for="team-id" class="sr-only">Team ID</label>
      <input
        type="text"
        id="team-id"
        class="form-control"
        placeholder="Team ID"
        v-model="tournamentJoinRequest.teamId"
        required
        autofocus
      />
      <br />
         <label for="tournament-id" class="sr-only">Tournament Id</label>
      <input
        type="text"
        id="tournament-id"
        class="form-control"
        placeholder="Tournament Id"
        v-model="tournamentJoinRequest.tournamentId"
        required
      />
      <label for="request-status" class="sr-only">Request Status</label>
      <input
        type="text"
        id="request-status"
        class="form-control"
        placeholder="Pending"
        v-model="tournamentJoinRequest.requestStatus"
        required
      />
      <br />
      <label for="open-to-public" class="sr-only">Open To Public</label>
      <input
        type="checkbox"
        id="open-to-public"
        class="form-control"
        placeholder="Open To Public"
        v-model="tournamentJoinRequest.approvalToJoin"
        required
      />
      <br />
      <label for="date-and-time" class="sr-only">Date and Time</label>
      <input
        type="datetime-local"
        id="date-and-time"
        class="form-control"
        placeholder="Date and Time"
        v-model="tournamentJoinRequest.tournamentTimestamp"
        required
      />
       <button class="btn btn-submit">Submit</button>
      <div class="success">{{ message }}</div>
      <!-- <button class="btn btn-lg btn-primary btn-block" type="submit">
        Join Tournament
      </button> -->
    </form>
     </div>
  </div>
</template>
 
<script>
import RequestJoinTournamentService from "../services/RequestJoinTournamentService";
 
export default {
  data() {
    return {
      tournamentJoinRequest: {
        teamId: "",
        tournamentId: "",
        requestStatus: "Pending",
        requestTimestamp: "",
      },
      message: "",
    };
  },
  methods: {
    createTournamentJoinRequest() {
      RequestJoinTournamentService.createJoinTournamentRequest(
        this.tournamentJoinRequest
      ).then((response) => {
        return (this.message = response.status);
      });
    },
  },
};
</script>
 
<style scoped>
.joinTournamentRequest{
  text-align: center;

}
#join-tournament-request-from{
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
  font-family: "Roboto", sans-serif;
}
.text-center .join-tournament-request-from{
  margin-top: 5%;
  font-family: "Roboto", sans-serif;
}
.join-tournament-request-from{
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
.join-tournament-request-from input{
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
.join-tournament-request-from button {
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

#team-id {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}

#tournament-id {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#request-status {
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
#date-and-time {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}


</style>





  
  
  
  
  
  




