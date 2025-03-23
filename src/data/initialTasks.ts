import { TaskStatus } from '@/enums/TaskStatus';
import { TaskTypes } from '@/types/TaskTypes';

export const initialTasks: TaskTypes[] = [
  { id: 1, title: 'Do laundry', status: TaskStatus.Pending },
  { id: 2, title: 'Walk the dog', status: TaskStatus.Completed },
  { id: 3, title: 'Write blog post', status: TaskStatus.Pending },
];
