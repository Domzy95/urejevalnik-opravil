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
    <div className="mt-10 flex items-center justify-center">
      <input
        className="max-w-xs mt-10 ml-10 border-solid border-2 border-black-800 rounded-md p-2"
        type="text"
        placeholder="Dodaj opravilo..."
        onChange={handleTaskChange}
        value={task}
      />
      <select
        value={priority} // Use priority state here
        onChange={handlePriorityChange}
        className="max-w-sm mt-10 ml-10 border-solid border-2 border-black-800 rounded-md p-2"
      >
        <option value="top">Visoka </option>
        <option value="middle">Srednja </option>
        <option value="low">Nizka </option>
      </select>
      <input
        value={deadline}
        onChange={handleDeadlineChange}
        className="max-w-xs mt-10 ml-10 border-solid border-2 border-black-800 rounded-md p-2"
        type="date"
      />
      <button
        onClick={addTask}
        className="max-w-xs mt-10 ml-10 border-solid border-2 border-black-800 rounded-md p-2 bg-green-500 text-white"
      >
        Dodaj opravilo
      </button>
    </div>
  );
}

export default AddTask;
