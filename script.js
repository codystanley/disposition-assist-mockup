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

    // Create a list item for each symptom
    const listItem = document.createElement("li");
    listItem.textContent = symptom;
    listItem.classList.add("list-group-item","btn","btn-warning","text-start");

    // Create a new button element for the RED action
    const warningButton = document.createElement("button");
    warningButton.textContent = "R";
    warningButton.classList.add("btn", "btn-danger", "ms-2");

    // Create a container (flexbox) to hold the list item and the button
    const container = document.createElement("div");
    container.classList.add("d-flex", "align-items-center","w-100");

    // Append button directly after the text within the list item
    listItem.appendChild(document.createTextNode(" ")); // Add a space
    listItem.appendChild(warningButton); 

    clickDispositionList.appendChild(listItem);


    listItem.addEventListener("click", () => {
       // if (!toggleButton.checked) { // Only cycle if toggle is OFF
            if (listItem.classList.contains("btn-warning")) {
                listItem.classList.remove("btn-warning");
                listItem.classList.add("btn-success");
            } else if (listItem.classList.contains("btn-success")) {
                listItem.classList.remove("btn-success");
                listItem.classList.add("btn-warning");
            } else { 
                listItem.classList.remove("btn-danger");
                listItem.classList.add("btn-warning");
            }
       // }
    });

    // Click listener for the warning button (always sets to red)
    warningButton.addEventListener("click", () => {
        listItem.classList.remove("btn-warning", "btn-success"); 
        listItem.classList.add("btn-danger");
    });

    // Function to toggle an individual list item's color (used when toggle is OFF)
    function toggleListItemColor(listItem) {
        listItem.classList.remove("btn-warning", "btn-success", "btn-danger");
        
        // Explicitly set to default (yellow) if toggle is off
        if (!toggleButton.checked) {
            listItem.classList.add("btn-warning");
        }
    }

    // Event listener for toggle button
    toggleButton.addEventListener("change", () => {
        const isAllGreen = toggleButton.checked;

        // Update the colors of all list items
        const listItems = clickDispositionList.querySelectorAll(".list-group-item");
        listItems.forEach(item => {
            item.classList.remove("btn-warning", "btn-danger", "btn-success");

            if (isAllGreen) {
                item.classList.add("btn-success");
            } else {
                // Reset individual item's color if it wasn't already red
                if (!item.classList.contains("btn-danger")) {
                    toggleListItemColor(item); // Use the helper function
                } 
            }
        });
    });
});