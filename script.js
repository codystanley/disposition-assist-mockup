const dispositionList = document.getElementById("dispositionList");
const symptoms = [
    "[1] Coughed up blood AND [2] more than blood-tinged sputum",
    "Retractions - skin between the ribs is pulling in (sinking in) with each breath (includes suprasternal retractions)",
    "Stridor (harsh sound with breathing in) is present",
    "[1] Lips or face have turned bluish BUT [2] only during coughing fits",
    "[1] Age < 12 weeks AND [2] fever 100.4 F (38.0 C) or higher by any route (Note: Preference is to confirm with rectal temperature)"
]; // Add your symptoms here

// Dynamically create list items
symptoms.forEach(symptom => {
    const listItem = document.createElement("li");
    listItem.textContent = symptom;
    listItem.classList.add("list-group-item");
    listItem.classList.add("btn");
    listItem.classList.add("btn-warning"); 
    dispositionList.appendChild(listItem);
  
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
