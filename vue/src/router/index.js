import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'

import TeamsView from '../views/TeamsView'
import MatchesView from '../views/MatchesView'
import TournamentsView from '../views/TournamentsView'
import TournamentDetailsView from '../views/TournamentDetailsView'
import TeamDetailsView from '../views/TeamDetailsView'
import MatchDetailsView from '../views/MatchDetailsView'
import CreateTeamView from '../views/CreateTeamView'
import CreateTournamentView from '../views/CreateTournamentView'
import CreateMatchView from '../views/CreateMatchView'
import TournamentJoinRequestView from '../views/TournamentJoinRequestView'
// import CreateJoinTournamentRequestView from '../views/CreateJoinTournamentRequestView'

import ModifyTournamentView from '../views/ModifyTournamentView'
import ModifyTeamView from '../views/ModifyTeamView'


import JoinTeamRequestView from '../views/JoinTeamRequestView'



Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },

    // team view routes here
    {
      path: "/teams",
      name: "teams-view",
      component: TeamsView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/teams/captain/:captainId",
      name: "teams-by-captain",
      component: TeamsView,
      meta: {
        requiresAuth: true
      }
    },
    // should be able to use teamId path for update + delete methods too
    {
      path: "/teams/team/:teamId",
      name: "teams-by-teamId",
      component: TeamsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/teams/team/:teamName",
      name: "teams-by-teamName",
      component: TeamsView,
      meta: {
        requiresAuth: true
      }
    },
    //team details view routes here
    {
      path: "/teams/team/:teamId",
      name: "team-details-view",
      component: TeamDetailsView,
      meta: {
        requiresAuth: true
      }
    },
    // will need UpdateTeam component for this path?
    {
      path: "/teams/update/:teamId",
      name: "modify-team",
      component: ModifyTeamView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/teams/create",
      name: "team-create",
      component: CreateTeamView,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: "/teams/joinTeam/create",
      name: "join-team-request",
      component: JoinTeamRequestView,
      meta: {
        requiresAuth: true
      }
    },

    //tournament view routes here
    {
      path: "/tournaments",
      name: "tournaments-view",
      component: TournamentsView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/tournaments/tournament/:tournamentId",
      name: "tournament-by-tournament-id",
      component: TournamentsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/tournaments/joinTournament",
      name: "tournament-join-request",
      component: TournamentJoinRequestView,
      meta: {
        requiresAuth: true
      }
    },

    //TournamentDetails routes here
    {
      path: "/tournaments/:tournamentId",
      name: "tournament-details-view",
      component: TournamentDetailsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/tournaments/create",
      name: "create-tournament",
      component: CreateTournamentView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "tournaments/update/:tournamentId",
      name: "modify-tournament",
      component: ModifyTournamentView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/tournaments/create",
      name: "tournament-create",
      component: CreateTournamentView,
      meta: {
        requiresAuth: true
      }
    },


    // it links to the tournament details page, like Modify,delete
    {
      path: "/tournaments/tournament/join",
      name: "join-tournament",
      component: TournamentDetailsView,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: "/tournaments/joinTournament/create",
      name: "join-tournament-request",
      component: TournamentJoinRequestView,
      meta: {
        requiresAuth: true
      }
    },

    // match view routes here
    // can use this route for CreateTeam
    {
      path: "/matches",
      name: "matches-view",
      component: MatchesView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/matches/create",
      name: "match-create",
      component: CreateMatchView,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: "/matches/match/:matchId",
    //   name: "match-by-matchId",
    //   component: MatchesView,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: "/matches/:tournamentId",
      name: "matches-by-tournamentId",
      component: MatchesView,
      meta: {
        requiresAuth: true
      }
    },
    // Match details routes here
    {
      path: "/matches/match/:matchId",
      name: "match-details-view",
      component: MatchDetailsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/matches/update/:matchId",
      name: "match-update-by-matchId",
      component: MatchDetailsView,
      meta: {
        requiresAuth: true
      }
    },

  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
