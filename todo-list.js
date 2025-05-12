function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskValue = taskInput.value.trim();

  if (taskValue === '') 
    {
    alert('Please enter a task.');
    return;
  }

  var li = document.createElement('li');
  li.textContent = taskValue;

  var removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.onclick = function() {
    this.parentElement.remove();
  };

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
}