function CompletedTasks({ completedTasks }) {
  return (
    <>
      <div className="mt-10 mb-10 flex items-center justify-center">
        <h1 className="ml-5 text-2xl font-bold text-green-500">
          Zaključena opravila
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
            </tr>
          </thead>
          {completedTasks.map((completedTask) => (
            <tbody>
              <tr key={completedTask.id}>
                <td className="px-12 py-8 border border-black-800">
                  {completedTask.task}
                </td>
                <td className="px-12 py-8 border border-black-800">
                  {completedTask.priority === "top"
                    ? "Visoka"
                    : completedTask.priority === "middle"
                    ? "Srednja"
                    : "Nizka"}
                </td>
                <td className="px-12 py-8 border border-black-800">
                  {completedTask.deadline}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default CompletedTasks;
