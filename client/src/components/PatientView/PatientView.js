import React from "react";
import "./PatientView.css";

//get caretaker phone number from db and assign a variable 

//API.getPhone => access db=
//setState {
	//caretaker: caretaker info
//}
	//.then (res=> this.setState({
//		caretaker phone: phone
//		}))

//caretakerPhone = ""



getHelp = event => {

}

const PatientView = (props) =>(
	<button onClick={() => props.getHelp}>
		Help 
	</button>
);	


export default PatientView;