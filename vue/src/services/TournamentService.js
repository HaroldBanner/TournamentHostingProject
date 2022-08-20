import axios from "axios";

export default {

    // routes should match backend
    getTournaments() {
        return axios.get('/tournaments');
    },

    getTournamentById(tournamentId) {
        return axios.get(`/tournaments/tournament/${tournamentId}`)
    },

    getTournamentByName(tournamentName) {
        return axios.get(`/tournaments/tournament/${tournamentName}`)
    },

    createTournament() {
        return axios.post('/tournaments')
    },

    updateTournament(tournament) {
        return axios.put(`/tournaments/update/${tournament.tournamentId}`, tournament)
    },

    deleteTournament(tournamentId) {
        return axios.delete(`/tournaments/${tournamentId}`)
    },

    getTournamentPointByTournamentId(tournamentId) {
        return axios.get(`/tournaments/tournamentPoints/tournament/${tournamentId}`)
    },

    getTournamentPointByTeamId(teamId) {
        return axios.get(`/tournaments/tournamentPoints/team/${teamId}`)
    }


}