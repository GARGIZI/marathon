const list = [ 
  
];

// Changes 

const changeStatus = (name, status) => {
  for (let key in list) {
    if (list[key].name == name) {
      list[key].status = status;
    }
  }
};

const changePriority = (name, priority) => {
  for (let key in list) {
    if (list[key].name == name) {
      list[key].priority = priority;
    }
  }
};

const changeName = (name, newTaskName) => {
  for (let key in list) {
    if (list[key].name == name) {
      list[key].name = newTaskName;
    }
  }
};

// ===

const deleteTask = task => {
  for (let key in list) {
    if (list[key].name == task) {
      delete list[key];
    }
  }
};

const addTask = (name, status, priority) => {
  const task = {
    id: 1,
    name: name, 
    status: status,
    priority: priority,
  };

  list.push(task);
};

const sortStatus = () => {
  console.log('TODO:');
  for (let key in list) {
    if (list[key].status == 'todo') {
      console.log(`  ${list[key].name}`);
    }
  }

  console.log('DONE:');
  for (let key in list) {
    if (list[key].status == 'done') {
      console.log(`  ${list[key].name}`);
    }
  }

  console.log('In Progress:');
  for (let key in list) {
    if (list[key].status == 'in progress') {
      console.log(`  ${list[key].name}`);
    }
  }
};

const sortPriority = () => {
  console.log('high:');
  for (let key in list) {
    if (list[key].priority == 'high') {
      console.log(`  ${list[key].name}`);
    }
  }

  console.log('low:');
  for (let key in list) {
    if (list[key].priority == 'low') {
      console.log(`  ${list[key].name}`);
    }
  }
};


addTask('test', 'todo', 'low');
addTask('second', 'done', 'high');
addTask('third', 'in progress', 'high');
addTask('fourth', 'todo', 'low');
sortStatus();