<template>
<div class="join-team-request">
<h1>Join Team Request</h1>
  <!-- <div id="join-team-request"> -->
    <!-- <form class="form-join-team-request" @submit.prevent="team - create"> -->
      <div id="join-team-request" class="text-center">
        <form class="join-team-request-form" v-on:submit.prevent="createJoinTeamRequest">  
      <h1 class="h3 mb-3 font-weight-normal">Join Team</h1>
      <label for="team-id" class="sr-only">Team ID</label>
      <input
        type="text"
        id="team-id"
        class="form-control"
        placeholder="Team ID"
        v-model="teamJoinRequest.teamId"
        required
        autofocus
      />
      <br />
         <label for="user-id" class="sr-only">User Id</label>
      <input
        type="text"
        id="user-id"
        class="form-control"
        placeholder="User Id"
        v-model="teamJoinRequest.userId"
        required
      />
      <br />
       <label for="request-status" class="sr-only">Request Status</label>
      <input
        type="text"
        id="request-status"
        class="form-control"
        placeholder="Pending"
        v-model="teamJoinRequest.requestStatus"
        required
      />
      <br />
      <label for="date-and-time" class="sr-only">Date and Time</label>
      <input
        type="datetime-local"
        id="date-and-time"
        class="form-control"
        placeholder="Date and Time"
        v-model="teamJoinRequest.tournamentTimestamp"
        required
      />
       <button class="btn btn-submit">Submit</button>
      <div class="success">{{ message }}</div>
    </form>
      <!-- <button class="btn btn-lg btn-primary btn-block" type="submit">
        Join Team
      </button> -->

  </div>
  </div>

</template>

<script>
import RequestJoinTeamService from "../services/RequestJoinTeamService";
 
export default {
  data() {
    return {
      teamJoinRequest: {
        teamId: "",
        userId: "",
        requestStatus: "Pending",
        requestTimestamp: Date.now(),
      },
      message: "",
    };
  },
  methods: {
    createTeamJoinRequest() {
      RequestJoinTeamService.createTeamJoinRequest(this.teamJoinRequest).then(
        (response) => {
          return (this.message = response.status);
        }
      );
    },
  },
};
</script>
 
<style scoped>
#join-team-request-form{
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
  font-family: "Roboto", sans-serif;
}
.text-center .join-team-request-form {
  margin-top: 5%;
  font-family: "Roboto", sans-serif;
}
.join-team-request-form{
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
.join-team-request-form input{
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
.join-team-request-form button {
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
 
#user-id {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#request-status {
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
