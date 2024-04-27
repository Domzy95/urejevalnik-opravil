function UpcomingTasks({
  upcomingTasks,
  task,
  priority,
  deadline,
  markedDone,
}) {
  // Define a mapping between priority options and background colors
  const priorityColors = {
    top: "bg-red-200",
    middle: "bg-orange-200",
    low: "bg-yellow-200",
  };

  return (
    <>
      <div className="mt-10 mb-10 flex items-center justify-center">
        <h1 className="ml-5 text-2xl font-bold text-green-500">
          Nedokončana opravila
        </h1>
      </div>
      <div className="p-5 ml-10 mr-10 flex items-center justify-center">
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2 border border-black-800 bg-slate-200">
                Opravilo
              </th>
              <th className="px-4 py-2 border border-black-800 bg-slate-200">
                Prioriteta
              </th>
              <th className="px-4 py-2 border border-black-800 bg-slate-200">
                Datum
              </th>
              <th className="px-4 py-2 border border-black-800 bg-slate-200">
                Akcija
              </th>
            </tr>
          </thead>

          <tbody>
            {upcomingTasks.map((task) => (
              <tr key={task.id}>
                <td className="px-12 py-8 border border-black-800">
                  {task.task}
                </td>
                <td
                  className={`px-12 py-8 border border-black-800 ${
                    priorityColors[task.priority]
                  }`}
                >
                  {task.priority === "top"
                    ? "Visoka "
                    : task.priority === "middle"
                    ? "Srednja "
                    : "Nizka "}
                </td>
                <td className="px-12 py-8 border border-black-800">
                  {task.deadline}
                </td>
                <td className="px-12 py-8 border border-black-800">
                  {/* This code snippet conditionally renders a button only if the task is not marked as done. When clicked, it calls the markedDone function with the task.id as a parameter to mark the task as done. */}
                  {!task.done && (
                    <button
                      onClick={() => markedDone(task.id)}
                      className="cursor-pointer bg-red-500 hover:bg-red-800 rounded-md p-2 text-white"
                    >
                      Opravilo zaključeno
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UpcomingTasks;
