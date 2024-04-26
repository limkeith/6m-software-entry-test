/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Declare an array to store patient's names
let patients = [];

// Task 2: Add the patient's name to the array
function addPatient(patientName){
    patients.push(patientName);
}

// Task 3: Implement the listPatient() function
function listPatient() {
    console.log(patients); // Print all patient's names
}

// Adding patients
addPatient("John");
addPatient("Mary");
addPatient("Mark");

// List all patients
listPatient(); // This should list ["John", "Mary", "Mark"]