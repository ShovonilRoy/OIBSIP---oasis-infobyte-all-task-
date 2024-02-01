document.addEventListener('DOMContentLoaded', function() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');

    storedTasks.forEach(function(task) {
        addTaskToList(task);
    });

    window.addTask = function() {
        const newTaskInput = document.getElementById('new-task');
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            const task = {
                id: Date.now(),
                text: taskText,
            };

            addTaskToList(task);
            storedTasks.push(task);

            localStorage.setItem('tasks', JSON.stringify(storedTasks));

            newTaskInput.value = '';
        }
    };

    function addTaskToList(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span><span>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})" class="delete-btn">Delete</button></span>
        `;
        taskList.appendChild(li);
    }

    window.editTask = function(id) {
        const newText = prompt('Edit task:', '');

        if (newText !== null) {
            const taskIndex = storedTasks.findIndex(task => task.id === id);
            storedTasks[taskIndex].text = newText;

            localStorage.setItem('tasks', JSON.stringify(storedTasks));

            const taskElement = taskList.querySelector(`li:nth-child(${taskIndex + 1}) span`);
            taskElement.textContent = newText;
        }
    };

    window.deleteTask = function(id) {
        const confirmDelete = confirm('Are you sure you want to delete this task?');

        if (confirmDelete) {
            const taskIndex = storedTasks.findIndex(task => task.id === id);
            storedTasks.splice(taskIndex, 1);

            localStorage.setItem('tasks', JSON.stringify(storedTasks));

            taskList.removeChild(taskList.children[taskIndex]);
        }
    };
});
