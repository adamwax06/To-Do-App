const form = document.getElementById('to-do-form');
const input = document.getElementById('entered-task');
const tasks = document.getElementById('task-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = input.value.trim();
  
  if (task == '') {
    return;
  }

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');

  const taskItem = document.createElement('span');
  taskItem.textContent = task;
  taskItem.classList.add('task');

  const removeButton = document.createElement('button');
  removeButton.textContent = '';
  removeButton.classList.add('finished');
  removeButton.addEventListener('click', deleteTask);

  taskContainer.appendChild(taskItem);
  taskContainer.appendChild(removeButton);
  tasks.appendChild(taskContainer);

  input.value = '';
});

function deleteTask(event) {
  const taskContainer = event.target.parentElement;
  taskContainer.remove();
}
