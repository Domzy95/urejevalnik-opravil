function AddTask({
  task,
  addTask,
  priority,
  deadline,
  handleTaskChange,
  handlePriorityChange,
  handleDeadlineChange,
}) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center sm:flex-row ">
      <input
        className="max-w-xs mt-2 sm:mt-10 ml-0 sm:ml-10 border-solid border-2 border-black-800 rounded-md p-2 add-task-input"
        type="text"
        placeholder="Dodaj opravilo..."
        onChange={handleTaskChange}
        value={task}
      />
      <select
        value={priority} // Use priority state here
        onChange={handlePriorityChange}
        className="max-w-sm mt-2 sm:mt-10 ml-0 sm:ml-10 border-solid border-2 border-black-800 rounded-md p-2 add-task-select"
      >
        <option value="top">Visoka prioriteta </option>
        <option value="middle">Srednja prioriteta </option>
        <option value="low">Nizka prioriteta </option>
      </select>
      <input
        value={deadline}
        onChange={handleDeadlineChange}
        className="max-w-xs mt-2 sm:mt-10 ml-0 sm:ml-10 border-solid border-2 border-black-800 rounded-md p-2 add-task-input"
        type="date"
      />
      <button
        onClick={addTask}
        className="max-w-xs mt-2 sm:mt-10 ml-0 sm:ml-10 border-solid border-2 border-black-800 rounded-md p-2 bg-green-500 text-white add-task-button"
      >
        Dodaj opravilo
      </button>
    </div>
  );
}

export default AddTask;
