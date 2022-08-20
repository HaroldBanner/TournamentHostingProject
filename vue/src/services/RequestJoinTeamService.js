import axios from "axios";

export default {
    getAllTeamJoinRequests() {
        return axios.get('teams/joinTeam')
    },

    createTeamJoinRequest() {
        return axios.post('teams/joinTeam')
    },

    getRequestJoinTeamByTeamIdWithPendingStatus(teamId){
        return axios.get(`teams/joinTeam/status/${teamId}/pending`)
    },

    getAllJoinTeamPendingRequests() {
        return axios.get('teams/joinTeam/status/pending')
    },

    updateRequestJoinTeam(requestId) {
        return axios.put(`teams/joinTeam/status/update/${requestId}`)
    },

    deleteRequestJoinTeam(requestId) {
        return axios.delete(`/teams/joinTeam/status/delete/${requestId}`)
    }
        
}