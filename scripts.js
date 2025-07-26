document.addEventListener("DOMContentLoaded", () => {
  const launchBtn = document.getElementById("launchBtn");

  launchBtn.addEventListener("click", () => {
    // Task List Setup
    const tasks = [
      {
        id: 1,
        title: "Gym",
        description: "Work those muscles",
        status: "todo",
      },
      
      {
        id: 2,
        title: "Study",
        description: "Work those brains",
        status: "doing",
      },
      {
        id: 3,
        title: "Sleep",
        description: "Rest that bod",
        status: "done",
      },
    ];

    //  Add up to 3 new tasks
    const maxNewTasks = 3;

    for (let i = 0; i < maxNewTasks; i++) {
      if (tasks.length >= 9) {
        alert("There are enough tasks on your board, please check them in the console.");
        break;
      }
    
      const title = prompt(`Enter title for task ${i + 1}:`);
      const description = prompt(`Enter description for task ${i + 1}:`);
      let status = prompt(`Enter status for task ${i + 1} (todo, doing, done):`).toLowerCase();
    
      while (!["todo", "doing", "done"].includes(status)) {
        alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
        status = prompt(`Enter status for task ${i + 1} (todo, doing, done):`).toLowerCase();
      }

      const lastId = tasks[tasks.length - 1].id;

      const newTask = {
        id: lastId + 1,
        title,
        description,
        status,
      };

      tasks.push(newTask);
    }

    //  Console log tasks
    console.log("All tasks:");
    console.log(`(${tasks.length})`, tasks);
    tasks.forEach((task, index) => {
      console.log(`   ${index}:`, task);
    });
    console.log("   length:", tasks.length);
    console.log("   [[Prototype]]: Array(0)");

     console.log("\nCompleted tasks:");
    const completedTasks = tasks.filter((task) => task.status === "done");
    console.log(`(${completedTasks.length})`, completedTasks);
    completedTasks.forEach((task, index) => {
      console.log(`   ${index}:`, task);
    });
    console.log("   length:", completedTasks.length);
    console.log("   [[Prototype]]: Array(0)");

    // JSL02 Section 
    const task1Title = prompt("Enter task 1 title:");
    const task1Description = prompt("Enter task 1 description:");
    let task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
    while (!["todo", "doing", "done"].includes(task1Status)) {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
    }

    const task2Title = prompt("Enter task 2 title:");
    const task2Description = prompt("Enter task 2 description:");
    let task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
    while (!["todo", "doing", "done"].includes(task2Status)) {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
    }

    if (task1Status === "done") {
      console.log("Task 1 complete:", task1Title);
    }
    if (task2Status === "done") {
      console.log("Task 2 complete:", task2Title);
    }
    if (task1Status !== "done" && task2Status !== "done") {
      console.log("No tasks completed, let's get to work!");
    }
  });
});