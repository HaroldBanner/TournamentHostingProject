<template>
<div id="navContainer">
  <nav>
      <div class="container-fluid">
        <a class="navbar-brand">
          <div class="header-logo-name">
            <img class="logo" src="LogoSmall.png" style="width:13.5em; height:3.7em;">
          </div>
        </a>
        </div>
    <div class="menu-item"> <router-link v-bind:to="{ name: 'home' }" v-if="$store.state.token !== ''">Home</router-link>
</div>
    
    <Dropdown title="Tournaments" :items="tournaments" v-if="$store.state.token !== ''"/>
    <Dropdown title="Teams" :items="teams" v-if="$store.state.token !== ''"/><!-- <router-link v-bind:to="{name: 'team-details-view',params: { teamId: team.teamId },}">{{ team.teamId }}</router-link> -->
    <Dropdown title="Matches" :items="matches" v-if="$store.state.token !== ''"/>
    <Dropdown title="Account" :items="account" v-if="$store.state.token !== ''"/>
    <!-- <div class="menu-item">  <router-link v-bind:to="{ name: 'tournaments-view' }" v-if="$store.state.token !== ''">Tournaments</router-link>
</div> -->

    <!-- <div class="menu-item"><router-link v-bind:to="{ name: 'matches-view' }" v-if="$store.state.token !== ''">Matches</router-link></div> -->

    <!-- <div class="menu-item"> <router-link v-bind:to="{ name: 'account-details', params: {id: Number($store.state.user.id)}}" v-if="$store.state.token != ''">Account</router-link></div> -->
  </nav>
    </div>
</template>

<script>
import Dropdown from './Dropdown';
export default {
  name: 'topNavbar',
  components: {
    Dropdown
  },
  data () {
    return {
        tournaments: [
        {
          title: 'Tournaments List',
          link: 'tournaments-view'
        },

        //  { 
        //   title: 'Tournament Request List',
        //   link: 'tournament-join-request-view'
        // },
          {
          title: 'Join Tournament',
          link: 'join-tournament-request'
        },

        {
          title: 'Create Tournament',
          link: 'tournament-create'
        },

       
        {
          title: 'Update Tournament',
          link: 'modify-tournament'
        },

        //   {
        //   title: 'Tournament Details',
        //   link: 'tournament-details-view'
        // },



      ],

      teams: [
        {
          title: 'Teams List',
          link: 'teams-view'
        },

          {
          title: 'Join Team',
          link: 'join-team-request'
        },

        {
          title: 'Create Team',
          link: 'team-create'
        },

      
        {
          title: 'Update Team',
          link: 'modify-team'
        },
        
        // {
        //   title: 'Team Details',
        //   link: 'team-details-view'
        // },
        
      ],

      matches: [
        {
          title: 'Matches List',
          link: 'matches-view'
        },
        {
          title: 'Create Match',
          link: 'match-create'
        },

        {
          title: 'Match Details',
          link:'match-details-view'
        },
     
        //  {
        //   title: 'Update Match',
        //   link: '#'
        // },

      ],
      account: [
        //    {
        //   title: 'Do not Have an Account?',
        //   link: 'register'
        // },

        //  {
        //   title: 'Login',
        //   link: 'login'

        // },
       
        {
          title: 'Logout',
          link: 'logout'

        }
       
      ]
 

    }
  }
}
</script>

<style>
#navContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 0.9;
  z-index: 9999;
 
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center; 
  flex-grow: 0.9;
 
}
nav .menu-item {
  color: #FFF;
  padding: 14px 16px;
  position: relative;
  text-align: center;
  border-bottom: px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #fb8500;
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
  
}


</style>