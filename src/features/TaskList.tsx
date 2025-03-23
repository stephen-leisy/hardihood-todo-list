'use client';

import { FilterButton } from '@/components/FilterButton';
import { HeaderWrapper } from '@/components/HeaderWrapper';
import { TaskCard } from '@/components/TaskCard';
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

  // handler to update filter change
  const handleFilterClick = (filter: TaskStatusFilterOptions) => {
    if (filter === TaskStatusFilterOptions.Completed)
      setCurrentFilter(TaskStatusFilterOptions.Completed);
    else if (filter === TaskStatusFilterOptions.Pending)
      setCurrentFilter(TaskStatusFilterOptions.Pending);
    else setCurrentFilter(TaskStatusFilterOptions.All);
  };

  // Handler to update task status
  const handleTaskStatusClick = (id: number) => {
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

  // Listen for Filter and Task Status changes and rerender cards
  useEffect(() => {
    if (currentFilter === TaskStatusFilterOptions.All)
      setFilteredTaskList(taskList);
    else
      setFilteredTaskList(
        taskList.filter(({ status }) => status === currentFilter)
      );
  }, [currentFilter, taskList]);

  return (
    <main className="w-screen p-8 flex justify-center">
      <div className="w-full border border-white rounded-2xl flex flex-col gap-8 lg:max-w-[1024px]">
        <HeaderWrapper>
          <p className="text-3xl">Task Master</p>
          <div className="flex gap-4">
            {filterOptionsConfig.map(({ id, title }) => (
              <FilterButton
                key={id}
                onClick={handleFilterClick}
                title={title}
                isActive={title === currentFilter}
              />
            ))}
          </div>
        </HeaderWrapper>
        <section className="p-8 flex flex-col gap-8">
          {filteredTaskList?.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={handleTaskStatusClick}
            />
          ))}
        </section>
      </div>
    </main>
  );
};
