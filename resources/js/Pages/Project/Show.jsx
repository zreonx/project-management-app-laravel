import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TaskTable from "../Task/TaskTable";

export default function Show({ auth, project, tasks, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`Project "${project.name}"`}
        </h2>
      }
    >
      <Head title="Projects" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={
                  project.image_path
                    ? project.image_path
                    : "https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-11371.jpg?w=900&t=st=1721650439~exp=1721651039~hmac=e842b90cb97e26a5128afe1f02c30f0073d8b2ab4a8e43ba27dbade56763859e"
                }
                alt=""
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              {/* <pre>{JSON.stringify(project, undefined, 2)}</pre> */}

              <div className="grid gap-1 grid-cols-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">Project ID</label>
                    <p className="mt-1">{project.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Project Name</label>
                    <p className="mt-1">{project.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Project Status</label>
                    <p className="mt-1">
                      <span
                        className={`px-2 py-1 rounded text-white ${
                          PROJECT_STATUS_CLASS_MAP[project.status]
                        }`}
                      >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created By</label>
                    <p className="mt-1">{project.createdBy.name}</p>
                  </div>
                </div>

                <div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Due Date</label>
                    <p className="mt-1">{project.due_date}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created At</label>
                    <p className="mt-1">{project.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Updated By</label>
                    <p className="mt-1">{project.updatedBy.name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">Project Description</label>
                <p className="mt-1">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              {Object.entries(tasks.data).length > 0 ? (
                <TaskTable
                  tasks={tasks}
                  queryParams={queryParams}
                  hideProjectColumn={true}
                />
              ) : (
                <p className="text-center text-xl">
                  Theres no task available in this project
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
