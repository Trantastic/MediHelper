import axios from "axios";

export default {
	savePatient: function () {
		return axios.post("/api/patient");
	}
};