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
    //listItem.classList.add("btn")
    //listItem.classList.add("btn-warning")
    listItem.classList.add("text-start")
    listItem.classList.add("bg-light");



    // Radio button group
    const radioGroup = document.createElement("div");
    radioGroup.classList.add("radio-group");
    radioGroup.classList.add("my-1");
    //radioGroup.classList.add("form-check");

    const options = ["R", "G", "Y"];

const colorMap = { 
    "R": "btn-outline-danger",
    "G": "btn-outline-success",
    "Y": "btn-outline-warning"
};

options.forEach((option, index) => {
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = rSymptom; 
    radioInput.id = `${rSymptom}-${option}`;
    radioInput.value = option.toLowerCase();
    radioInput.autocomplete = "off";
    radioInput.classList.add("mx-2"); // For spacing
    radioInput.classList.add("btn-check"); // For spacing
    radioGroup.appendChild(radioInput);

    const radioSpan = document.createElement("span"); // Create a span for the label
    radioSpan.textContent = option;
    radioSpan.classList.add("btn", colorMap[option], "mx-1"); // Apply styles to the span
    radioSpan.addEventListener("click", () => { 
        radioInput.checked = true; // Manually check the associated radio button
    });

    radioGroup.appendChild(radioSpan);
});

    // Symptom text
    const symptomText = document.createElement("div");
    symptomText.textContent = rSymptom;


    // Append elements to list item
    listItem.appendChild(symptomText);
    listItem.appendChild(radioGroup);
    radioDispositionList.appendChild(listItem); // Replace 'radioSymptoms' with 'radioDispositionList'
    /*
    // Event listener for radio button changes
    radioGroup.addEventListener("change", (event) => {
        const target = event.target;
        if (!target.classList.contains("btn-check")) return; // Check if it's a radio input

        listItem.classList.remove("btn-danger", "btn-success", "btn-warning"); // Clear previous styles

        const listItem = target.closest(".list-group-item"); // Find parent list item
        if (!listItem) return; // Safety check

        if (event.target.value === "R") {
            listItem.classList.add("btn-danger");
            listItem.classList.remove("btn-warning");
        } else if (event.target.value === "G") {
            listItem.classList.add("btn-success");
            listItem.classList.remove("btn-warning");
        } else {
            listItem.classList.add("btn-warning");
        }

    });*/
});

