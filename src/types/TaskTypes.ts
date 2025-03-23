import { TaskStatusFilterOptions } from '@/enums/TaskFilters';

export interface TaskTypes {
  id: number;
  title: string;
  status: TaskStatusFilterOptions.Completed | TaskStatusFilterOptions.Pending;
}
