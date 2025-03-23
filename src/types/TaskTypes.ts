import { TaskStatus } from '@/enums/TaskStatus';

export interface TaskTypes {
  id: number;
  title: string;
  status: TaskStatus;
}
