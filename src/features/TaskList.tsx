'use client';

import { filterOptionsConfig } from '@/config/filterOptionsConfig';
import { initialTasks } from '@/data/initialTasks';
import { TaskStatusFilterOptions } from '@/enums/TaskFilters';
import { TaskTypes } from '@/types/TaskTypes';
import { useState, useEffect } from 'react';

export const TaskList = () => {
  const [taskList, setTaskList] = useState<TaskTypes[]>(initialTasks);
  const [filteredTaskList, setFilteredTaskList] =
    useState<TaskTypes[]>(initialTasks);
  const [currentFilter, setCurrentFilter] = useState<TaskStatusFilterOptions>(
    TaskStatusFilterOptions.All
  );

  const handleFilterClick = (filter: TaskStatusFilterOptions) => {
    if (filter === TaskStatusFilterOptions.Completed)
      setCurrentFilter(TaskStatusFilterOptions.Completed);
    else if (filter === TaskStatusFilterOptions.Pending)
      setCurrentFilter(TaskStatusFilterOptions.Pending);
    else setCurrentFilter(TaskStatusFilterOptions.All);
  };

  const handleTaskStatus = (id: number) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === TaskStatusFilterOptions.Pending
                  ? TaskStatusFilterOptions.Completed
                  : TaskStatusFilterOptions.Pending,
            }
          : task
      )
    );
  };

  useEffect(() => {
    if (currentFilter === TaskStatusFilterOptions.All)
      setFilteredTaskList(taskList);
    else
      setFilteredTaskList(
        taskList.filter(({ status }) => status === currentFilter)
      );
  }, [currentFilter, taskList]);

  return (
    <main className="w-screen p-8">
      <div className="w-full border border-white rounded-2xl flex flex-col gap-8">
        <header className="border-b p-8 flex flex-col gap-8">
          <h2>Task Master</h2>
          <div className="flex gap-4">
            {filterOptionsConfig.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => handleFilterClick(title)}
                className="px-4 py-2 border cursor-pointer"
              >
                {title}
              </button>
            ))}
          </div>
        </header>
        <section className="p-8 flex flex-col gap-8">
          {filteredTaskList?.map(({ title, id, status }) => (
            <div key={id}>
              {title}
              {status}
              <button
                onClick={() => handleTaskStatus(id)}
                className="px-4 py-2 border cursor-pointer"
              >
                Toggle
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};
