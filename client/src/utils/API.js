import axios from "axios";

export default {
	savePatient: function(patientData) {
		console.log("API.js ", patientData);
		return axios.post("/api/patient", patientData);
	},
	// getPatients: function(id) {
	// 	console.log("API.js ", id);
	// 	return axios.get("/api/patient/" + id);
	// }
	getPatients: function(id) {
		console.log("api.js", id);
		return axios.get("/api/patient/" + id);
	},
	deletePatient: function(id) {
		return axios.delete("/api/patient/" + id);
	}


};