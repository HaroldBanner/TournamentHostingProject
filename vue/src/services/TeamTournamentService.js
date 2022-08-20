import axios from "axios";

export default {

    getAllTeamTournament() {
        return axios.get('/tournaments/getallteamtournament/')
    },

    getTeamsInTournament(tournamentId) {
        return axios.get(`/tournaments/tournament/teamslist/${tournamentId}`)
    },

    getTournamentsByTeam(teamtId) {
        return axios.get(`/tournaments/team/tournamentslist/${teamtId}`)
    },

    addTeamToTournament(teamTournament) {
        return axios.post('/tournaments/teamtournament', teamTournament)
    }
}