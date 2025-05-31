document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const prioritySelect = document.getElementById("prioritySelect");
    const taskCount = document.getElementById("taskCount");

    // Create priority group containers
    function createPriorityGroups() {
        const priorities = ['high', 'medium', 'low'];
        const fragment = document.createDocumentFragment();

        priorities.forEach(priority => {
            const groupDiv = document.createElement('div');
            groupDiv.className = `priority-group ${priority}`;
            
            const titleDiv = document.createElement('div');
            titleDiv.className = 'priority-group-title';
            titleDiv.textContent = `${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority Tasks`;
            
            const ul = document.createElement('ul');
            ul.id = `${priority}Tasks`;
            
            groupDiv.appendChild(titleDiv);
            groupDiv.appendChild(ul);
            fragment.appendChild(groupDiv);
        });

        taskList.appendChild(fragment);
    }

    // Initialize priority groups
    createPriorityGroups();

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });

    // Modified function to update the task counter
    function updateTaskCount() {
        const totalCount = document.querySelectorAll('li').length;
        taskCount.textContent = `${totalCount} task${totalCount !== 1 ? 's' : ''} remaining`;
    }

    // Modified function to add a new task
    // Add this new function to sort tasks by date
function sortTasksByDate(priorityList) {
    const tasks = Array.from(priorityList.children);
    tasks.sort((a, b) => {
        const dateA = new Date(a.dataset.deadline || '9999-12-31');
        const dateB = new Date(b.dataset.deadline || '9999-12-31');
        return dateA - dateB;
    });
    
    tasks.forEach(task => priorityList.appendChild(task));
}

// addTask function
function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const priority = prioritySelect.value;
    const deadline = taskDeadline.value;

    const li = document.createElement("li");
    li.className = priority;

    if (deadline) {
        li.dataset.deadline = deadline;
    }

    const dateDisplay = deadline ? `
        <div class="task-date">
            <i class="far fa-calendar-alt"></i>
            ${formatDate(deadline)}
        </div>
    ` : '';

    // Conditionally hide the priority label
    const priorityLabel = taskText ? '' : `<span class="priority-label ${priority}">${priority}</span>`;

    li.innerHTML = `
        <div class="task-header">
            ${dateDisplay}
            ${priorityLabel}
        </div>
        <div class="task-content">
            <span class="task-text">${taskText}</span>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
    `;

    // Add event listener to the delete button
    li.querySelector(".delete").addEventListener("click", () => {
        li.classList.add("fade-out");
        setTimeout(() => {
            li.remove();
            updateTaskCount();
        }, 300);
    });

    // Add to the appropriate priority group
    const priorityList = document.getElementById(`${priority}Tasks`);
    priorityList.appendChild(li);

    // Sort tasks by date within the priority group
    sortTasksByDate(priorityList);

    // Clear input fields
    taskInput.value = "";
    taskDeadline.value = "";
    updateTaskCount();

    // Add animation
    li.style.animation = "fadeIn 0.3s ease";
}

// Enhanced date formatting function
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

    // Initialize the task counter
    updateTaskCount();
});

document.addEventListener("DOMContentLoaded", () => {
    const welcomeOverlay = document.getElementById("welcomeOverlay");
    const continueBtn = document.getElementById("continueBtn");

    // Hide the welcome overlay when "Continue" is clicked
    continueBtn.addEventListener("click", () => {
        welcomeOverlay.style.display = "none";
    });

    // Rest of my existing JavaScript code
});

document.addEventListener("DOMContentLoaded", () => {
    const welcomeOverlay = document.getElementById("welcomeOverlay");
    const continueBtn = document.getElementById("continueBtn");
    const taskManager = document.getElementById("taskManager");

    // Fade out the welcome overlay and fade in the task manager
    continueBtn.addEventListener("click", () => {
        // Fade out the welcome overlay
        welcomeOverlay.style.animation = "fadeOut 0.5s ease forwards";

        // Wait for the fade-out animation to finish, then hide the overlay and fade in the task manager
        setTimeout(() => {
            welcomeOverlay.style.display = "none";
            taskManager.style.opacity = "1"; // Fade in the task manager
        }, 500); // Match the duration of the fade-out animation
    });
});
function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const priority = prioritySelect.value;
    const deadline = taskDeadline.value; // Get the deadline value

    const li = document.createElement("li");
    li.className = priority;

    // Add the deadline to the task if it exists
    const deadlineText = deadline ? `<span class="deadline">Deadline: ${formatDate(deadline)}</span>` : '';

    li.innerHTML = `
        <span class="priority-label ${priority}">${priority}</span>
        <span class="task-text">${taskText}</span>
        ${deadlineText}
        <button class="delete"><i class="fas fa-trash"></i></button>
    `;

    // Add event listener to the delete button
    li.querySelector(".delete").addEventListener("click", () => {
        li.classList.add("fade-out");
        setTimeout(() => {
            li.remove();
            updateTaskCount();
        }, 300);
    });

    // Add to the appropriate priority group
    const priorityList = document.getElementById(`${priority}Tasks`);
    priorityList.appendChild(li);

    // Clear input fields
    taskInput.value = "";
    taskDeadline.value = "";
    updateTaskCount();

    // Add animation
    li.style.animation = "fadeIn 0.3s ease";
}

// Helper function to format the date (optional)
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
}

