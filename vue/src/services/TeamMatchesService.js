import axios from "axios";

export default {
    //Alex created this to add teams to matches
    addTeamToMatch(teamMatch) {
        return axios.post('/matches/addTeam', teamMatch)
    },


    // Don't have controller for these yet, will need to match paths
    // These match the methods in the Dao
    getAllMatches(){
        return axios.get('/matches')
    },

    getMatchById(matchId) {
        return axios.get(`/matches/match/${matchId}`)
    },

    getMatchesByTournamentId(tournamentId) {
        return axios.get(`/matches/${tournamentId}`)
    },

    createMatch() {
        return axios.post('/matches')
    },

    updateMatch(match) {
        return axios.put(`/matches/update/${match.matchId}`)
    },

    deleteMatch(matchId) {
        return axios.delete(`/matches/${matchId}`)
    },

    getMatchPointByMatchId(matchId) {
        return axios.get(`/matches/matchPoints/match/${matchId}`)
    },

    getMatchPointByTeamId(teamId) {
        return axios.get(`/matches/matchPoints/team/${teamId}`)
    },

    getTeamMatchByMatchId(matchId) {
        return axios.get(`/matches/teamMatch/match/${matchId}`)
    },

    getTeamMatchByTeamId(teamId) {
        return axios.get(`/matches/teamMatch/team/${teamId}`)
    },
    getTeamsPlayingInThisMatch(matchId) {
        return axios.get(`/matches/teamMatch/match/${matchId}`)
    }

    



  




}