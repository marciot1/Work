// script.js
document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Capture form data
    const startDate = document.getElementById("start-date").value;
    const startTime = document.getElementById("start-time").value;
    const endDate = document.getElementById("end-date").value;
    const endTime = document.getElementById("end-time").value;
    const status = document.getElementById("status").checked;
    const description = document.getElementById("description").value;
  
    // Display the data (You can replace this with a save function)
    console.log("Start Date & Time:", `${startDate} ${startTime}`);
    console.log("End Date & Time:", `${endDate} ${endTime}`);
    console.log("Status:", status ? "Completed" : "Pending");
    console.log("Description:", description);
  
    // Clear the form
    alert("Tarefa registrada com sucesso!");
    document.getElementById("taskForm").reset();
  });
  