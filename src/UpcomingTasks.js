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
      <div className="p-5 ml-2 mr-2 flex items-center justify-center overflow-x-auto">
        {" "}
        {/* Added overflow-x-auto to allow horizontal scrolling */}
        <table className="">
          <thead>
            <tr>
              <th className="px-2 py-1 sm:px-4 sm:py-2 border border-black-800 bg-slate-200">
                Opravilo
              </th>
              <th className="px-2 py-1 sm:px-4 sm:py-2 border border-black-800 bg-slate-200">
                Prioriteta
              </th>
              <th className="px-2 py-1 sm:px-4 sm:py-2 border border-black-800 bg-slate-200">
                Datum
              </th>
              <th className="px-2 py-1 sm:px-4 sm:py-2 border border-black-800 bg-slate-200">
                Akcija
              </th>
            </tr>
          </thead>
          <tbody>
            {upcomingTasks.map((task) => (
              <tr key={task.id}>
                <td className="px-2 py-1 sm:px-4 sm:py-2 border border-black-800">
                  {task.task}
                </td>{" "}
                {/* Adjusted padding */}
                <td
                  className={`px-2 py-1 sm:px-4 sm:py-2 border border-black-800 ${
                    priorityColors[task.priority]
                  }`}
                >
                  {task.priority === "top"
                    ? "Visoka "
                    : task.priority === "middle"
                    ? "Srednja "
                    : "Nizka "}
                </td>{" "}
                {/* Adjusted padding */}
                <td className="px-2 py-1 sm:px-4 sm:py-2 border border-black-800">
                  {task.deadline}
                </td>{" "}
                {/* Adjusted padding */}
                <td className="px-2 py-1 sm:px-4 sm:py-2 border border-black-800">
                  {!task.done && (
                    <button
                      onClick={() => markedDone(task.id)}
                      className="cursor-pointer bg-red-500 hover:bg-red-800 rounded-md p-1 text-white"
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
