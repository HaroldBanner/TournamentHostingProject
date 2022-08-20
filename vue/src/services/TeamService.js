import axios from "axios";

export default {

    // routes should match backend
    getTeams() {
        return axios.get('/teams');
    },

    getTeamByCaptainId(captainId) {
        return axios.get(`/teams/captain/${captainId}`)
    },

    getTeamByTeamId(teamId) {
        return axios.get(`/teams/team/${teamId}`)
    },

    getTeamByTeamName(teamName) {
        return axios.get(`/teams/team/${teamName}`)
    },

    createTeam(team) {
        return axios.post('/teams', team)
    },

    updateTeam(team) {
        return axios.put(`/teams/update/${team.teamId}`, team)
    },

    deleteTeam(teamId) {
        return axios.delete(`/teams/${teamId}`)
    },

    getOpenTeams() {
        return axios.get('/teams/openTeams');
    }, 
    
    getTeamUserByUserId(userId) {
        return axios.get(`/teamMember/user/${userId}`)
    },

    getTeamUserByCaptainId(captainId) {
        return axios.get(`/teamMember/user/${captainId}`)
    }
}   