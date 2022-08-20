import axios from "axios";

export default {
    // Don't have controller for these yet, will need to match paths
    // These match the methods in the Dao
    getAllJoinTournamentRequests() {
        return axios.get('/tournaments/joinTournament')
    },

    getJoinTournamentRequestsByTeamId(teamId) {
        return axios.get(`/tournaments/joinTournament/teamId/${teamId}`)
    },

    getJoinTournamentRequestsByTournamentId(tournamentId) {
        return axios.get(`/tournaments/joinTournament/tournamentId/${tournamentId}`)
    },

    getTournamentByHostId(hostId) {
        return axios.get(`/tournaments/tournament/hostId/${hostId}`)
    },
    
    createJoinTournamentRequest() {
        return axios.post('/tournaments/joinTournament')
    },

    updateJoinTournamentRequest(tournamentJoinRequest) {
        return axios.put(`/tournaments/joinTournament/update/${tournamentJoinRequest.requestId}`)
    },

    deleteJoinTournamentRequest(tournamentJoinRequest) {
        return axios.delete(`/tournaments/joinTournament/delete/${tournamentJoinRequest.requestId}`)
    },



}