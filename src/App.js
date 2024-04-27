import { useState } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import UpcomingTasks from "./UpcomingTasks";
import CompletedTasks from "./CompletedTasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("top");
  const [deadline, setDeadline] = useState("");

  // Funkcije handleTaskChange, handlePriorityChange in handleDeadlineChange zajamejo vnos, ki ga zagotovijo uporabniki, in nato posodobijo ustrezne spremenljivke stanja

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };
  // ČE NE VNESES PODATKOV JAVI ALERT OKENČEK
  const addTask = () => {
    if (task.trim() === "" || deadline === "") {
      alert("Prosimo vnesite ime naloge in datum!");
      return;
    }
    const selectedDate = new Date(deadline);
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      alert("Prosimo vnesite tudi veljaven datum!");
      return;
    }

    // Funkcija addTask vstavi nov task v seznam
    const newTask = {
      id: tasks.length + 1,
      task,
      priority,
      deadline,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
    setPriority("top");
    setDeadline("");
  };
  // This code defines a function markedDone that takes an id parameter. It creates a new array updatedTasks by mapping over the tasks array, marking the task with the matching id as done. Finally, it updates the tasks state with the new array updatedTasks.
  const markedDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: true } : task
    );
    setTasks(updatedTasks);
    // This code snippet finds a task in the tasks array that matches a given id. If a matching task is found, it adds it to the completedTasks array using the spread operator.
    const completedTask = tasks.find((task) => task.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  // This JavaScript code snippet is using the filter method on an array named tasks. It creates a new array upcomingTasks that contains only the elements from tasks where the done property is false. In other words, it filters out all the tasks that are marked as completed.
  const upcomingTasks = tasks.filter((task) => !task.done);
  return (
    <>
      <Header />
      <AddTask
        task={task}
        addTask={addTask}
        deadline={deadline}
        handleTaskChange={handleTaskChange}
        handlePriorityChange={handlePriorityChange}
        handleDeadlineChange={handleDeadlineChange}
        priority={priority}
      />
      <UpcomingTasks
        upcomingTasks={upcomingTasks}
        task={task}
        priority={priority}
        deadline={deadline}
        markedDone={markedDone}
      />
      <CompletedTasks completedTasks={completedTasks} />
    </>
  );
}

// Task Schedular is an application that saves tasks submitted by the user and categorizes them among low, middle, or high priority. The user can also provide a deadline for the task. The user can also mark a task as completed by clicking on the button, and it will be added to the completed task area.
