document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');

    const task = taskInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value;

    addTask(task, dueDate, priority, category);

    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'Low';
    categoryInput.value = 'Work';
});

function addTask(task, dueDate, priority, category) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task} - ${dueDate} - ${priority} - ${category}</span>
        <button class="complete">Complete</button>
        <button class="delete">Delete</button>
    `;

    li.querySelector('.complete').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
}
