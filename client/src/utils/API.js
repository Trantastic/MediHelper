import axios from "axios";

export default {
	savePatient: function(patientData) {
		return axios.post("/api/patient", patientData);
	},
	// getPatients: function(id) {
	// 	console.log("API.js ", id);
	// 	return axios.get("/api/patient/" + id);
	// }
	// Get ONE patient
	getOnePatient: function(id) {
		return axios.get("/api/patient/" + id);
	},
	// Gets ALL patients
	getPatients: function() {
		return axios.get("/api/patient");
	},
	deletePatient: function(id) {
		return axios.delete("/api/patient/" + id);
	},
	updatePatient: function(id, patientData) {
		console.log("api.js", patientData);
		return axios.put("/api/patient/" + id, patientData);
	}


};