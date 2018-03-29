import axios from "axios";

export default {
	savePatient: function(patientData) {
		console.log("API.js ", patientData);
		return axios.post("/api/patient", patientData).then(console.log("API.js success!"));
	},
	getPatients: function(patients) {
		return axios.get("/api/patient", patients);
	}

};