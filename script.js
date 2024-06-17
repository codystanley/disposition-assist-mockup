/* -------- */
/* Method 1 */
/* -------- */

const clickDispositionList = document.getElementById("clickDispositionList");

const clickSymptoms = [
    "[1] Coughed up blood AND [2] more than blood-tinged sputum",
    "Retractions - skin between the ribs is pulling in (sinking in) with each breath (includes suprasternal retractions)",
    "Stridor (harsh sound with breathing in) is present",
    "[1] Lips or face have turned bluish BUT [2] only during coughing fits",
    "[1] Age < 12 weeks AND [2] fever 100.4 F (38.0 C) or higher by any route (Note: Preference is to confirm with rectal temperature)"
];

const toggleButton = document.getElementById("m1AllGreen")

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

/* -------- */
/* Method 2 */
/* -------- */

const radioDispositionList = document.getElementById("radioDispositionList");
const radioSymptoms = [
    "[1] Coughed up blood AND [2] more than blood-tinged sputum",
    "Retractions - skin between the ribs is pulling in (sinking in) with each breath (includes suprasternal retractions)",
    "Stridor (harsh sound with breathing in) is present",
    "[1] Lips or face have turned bluish BUT [2] only during coughing fits",
    "[1] Age < 12 weeks AND [2] fever 100.4 F (38.0 C) or higher by any route (Note: Preference is to confirm with rectal temperature)"
];

const colorMap = {
    "R": "btn-outline-danger",
    "G": "btn-outline-success",
    "Y": "btn-outline-warning"
};

radioSymptoms.forEach(rSymptom => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "text-start", "bg-light");

    const radioGroup = document.createElement("div");
    radioGroup.classList.add("my-1");

    const options = ["R", "G", "Y"];

    options.forEach(option => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = rSymptom;
        radioInput.id = `${rSymptom}-${option}`;
        radioInput.value = option.toLowerCase();
        radioInput.autocomplete = "off";
        radioInput.classList.add("btn-check", "mx-2");
        radioGroup.appendChild(radioInput);

        const radioLabel = document.createElement("label");
        radioLabel.htmlFor = `${rSymptom}-${option}`;
        radioLabel.textContent = option;
        radioLabel.classList.add("btn", colorMap[option], "mx-1");

        // Event listener for each label (not the list)
        radioLabel.addEventListener('click', () => {
            // Remove existing background colors from all list items
            const listItems = radioDispositionList.querySelectorAll('.list-group-item');
            listItems.forEach(item => item.classList.remove('bg-light', 'bg-danger', 'bg-success', 'bg-warning'));

            // Add the correct background color to the selected list item (the one containing this radio button)
            listItem.classList.add(colorMap[option].replace("outline-", "")); 
        });

        radioGroup.appendChild(radioLabel);
    });

    const symptomText = document.createElement("div");
    symptomText.textContent = rSymptom;

    listItem.appendChild(symptomText);
    listItem.appendChild(radioGroup);
    radioDispositionList.appendChild(listItem);
});
