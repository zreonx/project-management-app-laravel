import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
  auth,
  myPendingTasks,
  totalPendingTasks,
  totalProgressTasks,
  myProgressTasks,
  totalCompletedTasks,
  myCompletedTasks,
  totalTasks,
  activeTasks,
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-5">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 font-semibold text-2xl">
                Pending Tasks
              </h3>
              <p className="text-xl mt-3">
                <span className="mr-2">{myPendingTasks}</span>/
                <span>{totalPendingTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-blue-500 font-semibold text-2xl">
                In Progress Tasks
              </h3>
              <p className="text-xl mt-3">
                <span className="mr-2">{myProgressTasks}</span>/
                <span>{totalProgressTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-500 font-semibold text-2xl">
                Completed Tasks
              </h3>
              <p className="text-xl mt-3">
                <span className="mr-2">{myCompletedTasks}</span>/
                <span>{totalCompletedTasks}</span>
              </p>
            </div>
          </div>
          {/* <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-500 font-semibold text-2xl">
                Total Tasks
              </h3>
              <p className="text-xl mt-3">
                <span>{totalTasks}</span>
              </p>
            </div>
          </div> */}
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-5">
          <h3 className="text-gray-200 font-semibold text-lg mb-1 pl-1">
            My Active Tasks
          </h3>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900 dark:text-gray-100">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700/0 dark:text-gray-400 border-b border-slate-50/25">
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">Project Name</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeTasks.data.map((task) => (
                      <tr key={task.id}>
                        <td className="px-3 pb-1 pt-3">{task.id}</td>
                        <td className="px-3 pb-1 pt-3">
                          <Link
                            href={route("project.show", task.project.id)}
                            className="transition-all duration-300 font-bold hover:text-white/70"
                          >
                            {task.project.name}
                          </Link>
                        </td>
                        <td className="px-3 pb-1 pt-3">
                          {" "}
                          <Link
                            href={route("task.show", task.id)}
                            className="transition-all duration-300 font-bold hover:text-white/70"
                          >
                            {task.name}
                          </Link>
                        </td>
                        <td className="px-3 pb-1 pt-3">
                          <span
                            className={
                              "px-3 py-1 rounded text-white " +
                              TASK_STATUS_CLASS_MAP[task.status]
                            }
                          >
                            {TASK_STATUS_TEXT_MAP[task.status]}
                          </span>
                        </td>
                        <td className="px-3 pb-1 pt-3">{task.due_date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
