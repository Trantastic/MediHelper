const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect("mongodb://localhost/MediHelperDB");

const patientSeed = [
  {
    firstName: "James",
    lastName: "Harrison",
    address: "170 10th St, ",
    address2: "Apt 7",
    city: "Oakland",
    state: "California",
    zip: "94607",
    language: "Oakland",
    medicalcond: "None",
    medication: "None",
    allergies: "None",
    notes: "None",
    primaryCareName: "Rachel Curry",
    primaryCareNumber: "510-514-3368",
    contactFirstName: "Merissa",
    contactLastName: "Harrison",
    contactRelationship: "Mother",
    contactNumb: "510-479-4449",
  },
  {
    firstName: "Sophie",
    lastName: "Wang",
    address: "170 10th St, ",
    address2: "Apt 7",
    city: "Oakland",
    state: "California",
    zip: "94607",
    language: "Oakland",
    medicalcond: "None",
    medication: "None",
    allergies: "None",
    notes: "None",
    primaryCareName: "Tracy Li",
    primaryCareNumber: "510-479-4449",
    contactFirstName: "Jason",
    contactLastName: "Chen",
    contactRelationship: "Hunband",
    contactNumb: "510-514-3368",
  },
  {
    firstName: "Eason",
    lastName: "Lu",
    address: "170 10th St, ",
    address2: "Apt 7",
    city: "Oakland",
    state: "California",
    zip: "94607",
    language: "Oakland",
    medicalcond: "None",
    medication: "None",
    allergies: "None",
    notes: "None",
    primaryCareName: "Sandy He",
    primaryCareNumber: "510-479-4449",
    contactFirstName: "Jack",
    contactLastName: "Lu",
    contactRelationship: "Father",
    contactNumb: "510-514-3368",
  },
];

const eventSeed = [
  {
    eventTittle: "Appointment",
    startDate: "March 30th, 10:00am",
    endDate: " ",
    rePatient: " ",
    description: " ",
  },
  {
    eventTittle: "Appointment",
    startDate: "April 2nd, 09:00am",
    endDate: " ",
    rePatient: " ",
    description: " ",
  },
  {
    eventTittle: "Appointment",
    startDate: "April 8th, 09:30am",
    endDate: " ",
    rePatient: " ",
    description: " ",
  },
];

const caretakerSeed = [
  {
    userName: "victorli0825",
    password: "vkvk0618",
    phoneNumb: "510-479-4449",
    local:
      "victorli0825",
      "vkvk0618",
    patient: "_id: 123",
  },
  {
    userName: "victorli",
    password: "visa618",
    phoneNumb: "510-708-0825",
    local:
      "victorli",
      "vkvk0618",
    patient: "_id: 123",
  },
  {
    userName: "victor825",
    password: "edgewater1129",
    phoneNumb: "510-708-0905",
    local:
      "victor825",
      "edgewater1129",
    patient: "_id: 123",
  },
];

db.Patient
  .remove({})
  .then(() => db.Patient.collection.insertMany(patientSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(patientSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Caretaker
  .remove({})
  .then(() => db.Caretaker.collection.insertMany(patientSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });