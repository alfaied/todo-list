document.getElementById('submitButton').onclick = function() {
  let input = document.getElementById('taskField').value;
  if (input === '') return;

  let output = document.getElementById('tasks');
  let newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.innerHTML = '<span>' + input + '</span>' +
                      '<div class="buttons">' +
                      '<button class="editButton">Edit</button>' +
                      '<button class="deleteButton">Delete</button>' +
                      '</div>';

  output.appendChild(newTask);

  document.getElementById('taskField').value = '';

  newTask.querySelector('.editButton').onclick = function() {
    let newText = prompt('Edit your task:', input);
    if (newText !== null && newText !== '') {
      newTask.querySelector('span').innerText = newText;
    }
  };

  newTask.querySelector('.deleteButton').onclick = function() {
    output.removeChild(newTask);
  };
};