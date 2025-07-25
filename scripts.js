const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];
// Allow user to add up to 3 new tasks

const maxNewTasks = 3;

for (let i = 0; i < maxNewTasks; i++) {
  if (tasks.length >= 9) { // 6 initial + 3 new max
    alert("There are enough tasks on your board, please check them in the console.");
    break;
  }

  const title = prompt(`Enter title for task ${i + 1}:`);
  const description = prompt(`Enter description for task ${i + 1}:`);

  let status = prompt(`Enter status for task ${i + 1} (todo, doing, done):`).toLowerCase();
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt(`Enter status for task ${i + 1} (todo, doing, done):`).toLowerCase();
  }

   const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;

   const newTask = {
    id: lastId + 1,
    title,
    description,
    status,
  };

  tasks.push(newTask);
}

// Filter and display completed tasks
const completedTasks = tasks.filter((task) => task.status === "done");
console.log("Completed tasks:");
console.log(completedTasks);

// JSL02 – Correction Code
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

let task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
while (task1Status !== "todo" && task1Status !== "doing" && task1Status !== "done") {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
}

const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
while (task2Status !== "todo" && task2Status !== "doing" && task2Status !== "done") {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
}

if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}