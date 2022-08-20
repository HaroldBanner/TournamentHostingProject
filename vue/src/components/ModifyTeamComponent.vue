<template>
  <div class="modify-team">
    <!-- <h1>Modify Team</h1> -->
    <form class="modify-team-form" v-on:submit.prevent="modifyNewTeam">
      <h1 class="h3 mb-3 font-weight-normal">Update Team</h1>
      <label for="captain-id" class="sr-only">Captain ID</label>
      <input
        type="text"
        id="captain-id"
        class="form-control"
        placeholder="Captain ID"
        v-model="team.captainId"
        required
        autofocus
      />
       <br />
           <label for="team-name" class="sr-only">Team Name</label>
      <input
        type="text"
        id="team-name"
        class="form-control"
        placeholder="Team Name"
        v-model="team.teamName"
        required
      />
       <br />
             <label for="sport" class="sr-only">Sport</label>
      <input
        type="text"
        id="sport"
        class="form-control"
        placeholder="Sport"
        v-model="team.sport"
        required
      />
       <br />
             <label for="need-approval-to-join" class="sr-only">Need Approval to Join?</label>
      <input
        type="checkbox"
        id="need-approval-to-join"
        class="form-control"
        placeholder="need-approval-to-join"
        v-model="team.teamOpenToNewMembers"
        required
      />
       <br />
      <label for="privacy" class="sr-only">Open Group</label>
      <input
        type="checkbox"
        id="privacy"
        class="form-control"
        placeholder="Privacy"
        v-model="team.approvalToJoin"
        required
      />
       <br />
          <label for="team-size" class="sr-only">Max Members</label>
      <input
        type="number"
        id="team-size"
        class="form-control"
        placeholder="Max Members"
        v-model="team.maxMembers"
        required
      />
       <br />
         <label for="team-email" class="sr-only">Team Email</label>
      <input
        type="text"
        id="team-email"
        class="form-control"
        placeholder="Team Email"
        v-model="team.teamEmail"
        required
      />
       <br />
      <label for="city" class="sr-only">City</label>
      <input
        type="text"
        id="city"
        class="form-control"
        placeholder="City"
        v-model="team.teamCity"
        required
      />
       <br />
      <label for="state" class="sr-only">State</label>
      <input
        type="text"
        id="state"
        class="form-control"
        placeholder="State"
        v-model="team.teamStateAbbreviation"
        required
      />
       <br />

      <!-- <input type="number" v-model="team.captainId" /><label for="captain-id"
        >Captain ID</label
      > -->
      <!-- <input type="text" v-model="team.teamName" />
      <label for="team-name">Team Name</label> -->
      <!-- <input type="number" v-model="team.sportId" />
      <label for="sport-played">Sport Played</label> -->
      <!-- <input type="checkbox" v-model="team.teamOpenToNewMembers" /><label
        for="open-to-new-members"
        >Open to New Members?</label
      > -->
      <!-- <input type="checkbox" v-model="team.approvalToJoin" /><label
        for="need-approval-to-join"
        >Need Approval to Join?</label
      > -->
      <!-- <input type="number" v-model="team.maxMembers" /><label for="max-members"
        >Max Members</label
      > -->
      <!-- <input type="email" v-model="team.teamEmail" /><label for="email"
        >Team Email</label
      >
      <input type="text" v-model="team.teamCity" /><label for="home-city"
        >Home City</label
      >
      <input type="text" v-model="team.teamStateAbbreviation" /><label
        for="home-state"
        >Home State</label -->
      <!-- > -->
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
      team: 
        {
    captainId: "",
    teamName: "",
    sportId: "",
    teamOpenToNewMembers: "",
    approvalToJoin: "",
    maxMembers: "",
    teamEmail: "",
    teamCity: "",
    teamStateAbbreviation: ""
},
      message: "",
    };
  },
  methods: {
    modifyNewTeam() {
      TeamService.updateTeam(this.team).then(response => {
        return (this.message = response.status);
      });
    },
  },

};
</script>

<style>
#modify-team-form{
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
  font-family: "Roboto", sans-serif;
}
.text-center .modify-team-form {
  margin-top: 5%;
  font-family: "Roboto", sans-serif;
}
.modify-team-form{
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
.modify-team-form input{
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
.modify-team-form button {
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

#captain-id {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}

#team-name {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#sport {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#recruiting {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#privacy {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#team-size {
  font-family: "Roboto", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
}
#team-email {
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

</style>