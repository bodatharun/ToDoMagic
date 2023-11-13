function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="toggleCompleted(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear the input field after adding a task
}

function toggleCompleted(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle("completed");

    const completeButton = taskItem.querySelector('button:nth-child(2)');
    completeButton.textContent = taskItem.classList.contains("completed") ? "Undo" : "Complete";
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Simple calendar integration using external library (e.g., FullCalendar)
document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
    });
    calendar.render();
});
