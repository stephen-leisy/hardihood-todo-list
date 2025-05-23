import { TaskStatusFilterOptions } from '@/enums/TaskFilters';
import { TaskTypes } from '@/types/TaskTypes';

export const initialTasks: TaskTypes[] = [
  { id: 1, title: 'Do laundry', status: TaskStatusFilterOptions.Pending },
  { id: 2, title: 'Walk the dog', status: TaskStatusFilterOptions.Completed },
  { id: 3, title: 'Write blog post', status: TaskStatusFilterOptions.Pending },
];
