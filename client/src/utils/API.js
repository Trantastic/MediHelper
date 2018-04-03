import axios from "axios";

export default {
	// Saves patient from patientInputForm
	savePatient: function(patientData) {
		return axios.post("/api/patient", patientData);
	},
	// Get ONE patient
	getOnePatient: function(id) {
		return axios.get("/api/patient/" + id);
	},
	// Gets ALL patients
	getPatients: function() {
		return axios.get("/api/patient");
	},
	// Deletes specific patient
	deletePatient: function(id) {
		return axios.delete("/api/patient/" + id);
	},
	// Updates the specified patient's information
	updatePatient: function(id, patientData) {
		return axios.put("/api/patient/" + id, patientData);
	}
};