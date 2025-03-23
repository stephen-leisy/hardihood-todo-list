import { TaskStatusFilterOptions } from '@/enums/TaskFilters';

export const filterOptionsConfig = [
  {
    id: 1,
    title: TaskStatusFilterOptions.All,
  },
  {
    id: 2,
    title: TaskStatusFilterOptions.Completed,
  },
  {
    id: 3,
    title: TaskStatusFilterOptions.Pending,
  },
];
