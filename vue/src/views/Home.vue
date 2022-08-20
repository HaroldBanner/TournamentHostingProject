<template>
  <div class="home">
    <!-- <h2>For All The Marbles</h2> -->
    <div class="banner-logo">
      <div class="logo">
        <img id="logo" src="LogoSmall.png" alt="Banner Image" class="center" />
      </div>
    </div>
    <div class="navigation">
    <button class="button">
      <router-link :to="{ name: 'tournament-create' }"
        ><slot>Create Tournament</slot></router-link
      >
    </button>
    
    <button class="button">
      <router-link :to="{ name: 'join-tournament-request' }">
        <slot>Join Tournament</slot></router-link
      >
    </button>
    
    <button class="button">
      <router-link :to="{ name: 'team-create' }"
        ><slot>Create Team</slot></router-link
      >
    </button>
     
     </div>
  </div>
</template>

<script>
import TournamentService from "../services/TournamentService";
import TeamService from "../services/TeamService";
import MatchService from "../services/MatchService";
import TeamTournamentService from "../services/TeamTournamentService";
import SportService from "../services/SportService";


export default {
  name: "home",
  components: {},
   created() {
    this.getTournaments();
    this.getTeams();
    this.getMatches();
    this.getTeamTournaments();
    this.getSports();
    console.log(JSON.stringify(this.$store.state, null, 2));
  },
  methods: {
    getTournaments() {
      TournamentService.getTournaments().then((response) => {
        this.$store.commit("SET_CURRENT_TOURNAMENT", response.data);
      });
    },
    getTeams() {
      TeamService.getTeams().then((response) => {
        this.$store.commit("SET_CURRENT_TEAM", response.data);
      });
    },
    getMatches() {
      MatchService.getMatches().then((response) => {
        this.$store.commit("SET_CURRENT_MATCH", response.data);
      });
    },
    getTeamTournaments() {
      TeamTournamentService.getAllTeamTournament().then((response) => {
        this.$store.commit("SET_CURRENT_TEAM_TOURNAMENT", response.data);
      });
    },
    getSports(){
      SportService.getSports().then((response) => {
        this.$store.commit("SET_CURRENT_SPORT", response.data);
      });
    },
  },
};
</script>

<style>

.navigation {
  margin: 0;
  position: absolute;
  top: 32%;
  left: 28%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.center {
  display: block;
  margin: 0;
  position: absolute;
  top: 45%;
  left: 33.4%;
}
/* .banner-logo{
  max-width: 1280px;
  max-height: 720px;
 
} */

button {
  margin: 25px 5px 20px 30px;
  padding: 1.2rem 3rem;
  border: none;
  cursor: pointer;
  background: #fb8500;
  border-radius: 25px;
  text-align: center;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  box-shadow: 24px 24px 84px #7dc0fe, inset -12px -12px 14px #ffb703,
    inset 10px 10px 20px #ffb703;
}
</style>
