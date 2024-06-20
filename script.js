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

clickSymptoms.forEach(symptom => {

    // Create a list item for each symptom
    const listItem = document.createElement("li");
    listItem.textContent = symptom;
    listItem.classList.add("list-group-item", "btn", "btn-warning", "text-start", "d-flex", "align-items-center", "w-100");
    
    // Create warning button
    const warningButton = document.createElement("button");
    warningButton.textContent = "R";
    warningButton.classList.add("btn", "btn-danger", "ms-2");

    // Create a flex container for layout
    const container = document.createElement("div");
    container.classList.add("d-flex", "align-items-center", "w-100");

    // Append elements to container
    container.appendChild(listItem); 
    container.appendChild(warningButton);

    // Append container to the list
    clickDispositionList.appendChild(container);

    // Click listeners for list item and warning button
    listItem.addEventListener("click", () => {
            cycleListItemColor(listItem); 
    });

    warningButton.addEventListener("click", () => {
        setListItemToRed(listItem);
    });

    // Function to cycle list item color (warning -> success -> warning)
    function cycleListItemColor(item) {
        if (item.classList.contains("btn-warning")) {
            item.classList.replace("btn-warning", "btn-success");
        } else if (item.classList.contains("btn-success")) {
            item.classList.replace("btn-success", "btn-warning");
        } else {
            return;
        }
    }

    // Function to set list item to red
    function setListItemToRed(item) {
        if (item.classList.contains("btn-danger")) {
            item.classList.replace("btn-danger", "btn-warning");
        } else {
            item.classList.replace("btn-warning", "btn-danger");
            item.classList.replace("btn-success", "btn-danger");
        }
    }
});

/* -------- */
/* Method 2 */
/* -------- */

const buttonDispositionList = document.getElementById("buttonDispositionList");

const buttonSymptoms = [
    "[1] Coughed up blood AND [2] more than blood-tinged sputum",
    "Retractions - skin between the ribs is pulling in (sinking in) with each breath (includes suprasternal retractions)",
    "Stridor (harsh sound with breathing in) is present",
    "[1] Lips or face have turned bluish BUT [2] only during coughing fits",
    "[1] Age < 12 weeks AND [2] fever 100.4 F (38.0 C) or higher by any route (Note: Preference is to confirm with rectal temperature)"
];

buttonSymptoms.forEach(symptom => {

    // Create a list item for each symptom
    const btnListItem = document.createElement("li");
    btnListItem.textContent = symptom;
    btnListItem.classList.add("list-group-item", "btn", "btn-warning", "text-start", "d-flex", "align-items-center", "w-100");
    
    // Create danger button
    const dangerButton = document.createElement("button");
    dangerButton.textContent = "R";
    dangerButton.classList.add("btn", "btn-danger", "ms-2");

    // Create  button
    const successButton = document.createElement("button");
    successButton.textContent = "G";
    successButton.classList.add("btn", "btn-success", "ms-2");

    // Create a flex container for layout
    const container = document.createElement("div");
    container.classList.add("d-flex", "align-items-center", "w-100");

    // Append elements to container
    container.appendChild(btnListItem); 
    container.appendChild(dangerButton);
    container.appendChild(successButton);

    // Append container to the list
    buttonDispositionList.appendChild(container);

    // Click listeners for danger & success button

    dangerButton.addEventListener("click", () => {
        setListItemToRed(btnListItem);
    });

    successButton.addEventListener("click", () => {
        setListItemToGreen(btnListItem);
    });

    // Function to set list item to red
    function setListItemToRed(item) {
        if (item.classList.contains("btn-danger")) {
            item.classList.replace("btn-danger", "btn-warning");
        } else {
            item.classList.replace("btn-warning", "btn-danger");
            item.classList.replace("btn-success", "btn-danger");
        }
    }

    function setListItemToGreen(item) {
        if (item.classList.contains("btn-success")) {
            item.classList.replace("btn-success", "btn-warning");
        } else {
            item.classList.replace("btn-warning", "btn-success");
            item.classList.replace("btn-danger", "btn-success");
        }
    }
});

/* -------- */
/* Method 3 */
/* -------- */

const clicksDispositionList = document.getElementById("clicksDispositionList");

const clicksSymptoms = [
    "[1] Coughed up blood AND [2] more than blood-tinged sputum",
    "Retractions - skin between the ribs is pulling in (sinking in) with each breath (includes suprasternal retractions)",
    "Stridor (harsh sound with breathing in) is present",
    "[1] Lips or face have turned bluish BUT [2] only during coughing fits",
    "[1] Age < 12 weeks AND [2] fever 100.4 F (38.0 C) or higher by any route (Note: Preference is to confirm with rectal temperature)"
];

clicksSymptoms.forEach(symptom => {

    // Create a list item for each symptom
    const clicksListItem = document.createElement("li");
    clicksListItem.textContent = symptom;
    clicksListItem.classList.add("list-group-item", "btn", "btn-warning", "text-start", "d-flex", "align-items-center", "w-100");

    // Create a flex container for layout
    const clicksContainer = document.createElement("div");
    clicksContainer.classList.add("d-flex", "align-items-center", "w-100");

    // Append elements to container
    clicksContainer.appendChild(clicksListItem); 

    // Append container to the list
    clicksDispositionList.appendChild(clicksContainer);

     // Click listeners for list item
     clicksListItem.addEventListener("click", () => {
        cycleListItemColor(clicksListItem); 
    });

    // Function to cycle list item color (warning -> success -> warning)
    function cycleListItemColor(item) {
        if (item.classList.contains("btn-warning")) {
            item.classList.replace("btn-warning", "btn-success");
        } else if (item.classList.contains("btn-success")) {
            item.classList.replace("btn-success", "btn-danger");
        } else if (item.classList.contains("btn-danger")) {
            item.classList.replace("btn-danger", "btn-warning");
        } else {
            return;
        }
    }
});