import axios from "axios";

export default {
    // Don't have controller for these yet, will need to match paths
    // These match the methods in the Dao

    getAllUserTeam(){
        return axios.get('/userTeam')
    },

    getTeamMembersListByTeamId(teamId) {
        return axios.get(`/userTeam/team/${teamId}`)
    },

    getUserTeamByUserId(userId) {
        return axios.get(`/userTeam/team/${userId}`)
    }

}
