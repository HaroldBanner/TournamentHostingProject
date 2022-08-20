import axios from "axios";

export default {
    // must match backend paths
    getMatches() {
        return axios.get('/matches');
    },

    getMatchByMatchId(matchId) {
        return axios.get(`/matches/match/${matchId}`)
    },

    getMatchesByTournamentId(tournamentId) {
        return axios.get(`/matches/${tournamentId}`)
    },

    createMatch(match) {
        return axios.post('/matches', match)
    },

    updateMatch(match) {
        return axios.put(`/matches/update/${match.matchId}`)
    },

    deleteMatch(matchId) {
        return axios.delete(`/matches/${matchId}`)
    },

    getMatchPointByMatchId(matchId) {
        return axios.get(`/matches/matchPoints/match${matchId}`)
    },

    getMatchPointByTeamId(teamId) {
        return axios.get(`/matches/matchPoints/team/${teamId}`)
    },

    getTeamMatchByMatchId(matchId) {
        return axios.get(`/matches/teamMatch/match/${matchId}`)
    },

    getTeamMatchByTeamId(teamId) {
        return axios.get(`/matches/teamMatch/team/${teamId}`)
    }

}