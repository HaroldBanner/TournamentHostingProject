import axios from "axios";

// All we need is the list of sports from the db
export default {
    getSports() {
        return axios.get('/sports')
    },

    getSportsBySportId(sportId) {
        return axios.get(`/sports/${sportId}`)
    },

    getSportsBySportName(sportName) {
        return axios.get(`/sports/sportName/${sportName}`)
    },

    createSport() {
        return axios.post('/sports')
    },

    updateSport(sport) {
        return axios.put(`/sports/update/${sport.sportId}`)
    },

    deleteSport(sport) {
        return axios.delete(`/sports/${sport.sportId}`)
    },
}