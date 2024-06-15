const clickDispositionList = document.getElementById("clickDispositionList");
const clickSymptoms = [
    "[1] Coughed up blood AND [2] more than blood-tinged sputum",
    "Retractions - skin between the ribs is pulling in (sinking in) with each breath (includes suprasternal retractions)",
    "Stridor (harsh sound with breathing in) is present",
    "[1] Lips or face have turned bluish BUT [2] only during coughing fits",
    "[1] Age < 12 weeks AND [2] fever 100.4 F (38.0 C) or higher by any route (Note: Preference is to confirm with rectal temperature)"
]; // Add your symptoms here

// Dynamically create list items
clickSymptoms.forEach(symptom => {
    const listItem = document.createElement("li");
    listItem.textContent = symptom;
    listItem.classList.add("list-group-item");
    listItem.classList.add("btn");
    listItem.classList.add("btn-warning");
    listItem.classList.add("text-start");
    clickDispositionList.appendChild(listItem);
  
    listItem.addEventListener("click", () => {
        if (listItem.classList.contains("btn-warning")) {
          listItem.classList.remove("btn-warning");
          listItem.classList.add("btn-success");
        } else if (listItem.classList.contains("btn-success")) {
          listItem.classList.remove("btn-success"); // Remove green
          listItem.classList.add("btn-danger");
        } else { // Default (grey)
          listItem.classList.remove("btn-danger");
          listItem.classList.add("btn-warning");
        }
      });
  });

const radioDispositionList = document.getElementById("radioDispositionList");
const radioSymptoms = [
        "[1] Coughed up blood AND [2] more than blood-tinged sputum",
        "Retractions - skin between the ribs is pulling in (sinking in) with each breath (includes suprasternal retractions)",
        "Stridor (harsh sound with breathing in) is present",
        "[1] Lips or face have turned bluish BUT [2] only during coughing fits",
        "[1] Age < 12 weeks AND [2] fever 100.4 F (38.0 C) or higher by any route (Note: Preference is to confirm with rectal temperature)"
];

radioSymptoms.forEach(rSymptom => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.classList.add("btn")
    listItem.classList.add("btn-warning")

    // Radio button group
    const radioGroup = document.createElement("div");
    radioGroup.classList.add("radio-group");
    radioGroup.classList.add("form-check");

    const options = ["Red", "Green", "Yellow"];
    options.forEach((option, _index) => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = rSymptom; 
        radioInput.id = `${rSymptom}-${option}`;
        radioInput.value = option.toLowerCase();

        // For Styling
        radioInput.classList.add("form-check-inpput");

        const radioLabel = document.createElement("label");
        radioLabel.htmlFor = `${rSymptom}-${option}`;
        radioLabel.textContent = option;
        radioLabel.classList.add("form-check-label") // for bootstrap styling

        radioGroup.appendChild(radioLabel);
        radioGroup.appendChild(radioInput);
    });

    // Symptom text
    const symptomText = document.createElement("span");
    symptomText.textContent = rSymptom;

    // Append elements to list item
    listItem.appendChild(symptomText);
    listItem.appendChild(radioGroup);
    radioDispositionList.appendChild(listItem); // Replace 'radioSymptoms' with 'radioDispositionList'

    // Event listener for radio button changes
    radioGroup.addEventListener("change", (event) => {
        listItem.classList.remove("btn-danger", "btn-success"); // Clear previous styles

        if (event.target.value === "red") {
            listItem.classList.add("btn-danger");
            listItem.classList.remove("btn-warning");
        } else if (event.target.value === "green") {
            listItem.classList.add("btn-success");
            listItem.classList.remove("btn-warning");
        } else {
            listItem.classList.add("btn-warning");
        }

    });
});

