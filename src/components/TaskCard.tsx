import { TaskTypes } from '@/types/TaskTypes';
import { CardButton } from './CardButton';
import { TaskStatusFilterOptions } from '@/enums/TaskFilters';
import { CardStatusText } from './CardStatusText';

export const TaskCard: React.FC<{
  task: TaskTypes;
  onClick: (id: number) => void;
}> = ({ task, onClick }) => {
  const { title, status, id } = task;
  const isCompleted: boolean = status === TaskStatusFilterOptions.Completed;
  return (
    <div
      className={`border border-white rounded-2xl p-8 flex flex-col gap-12 ${
        isCompleted ? 'bg-gray-800' : 'black'
      }`}
    >
      <div>
        <p className={`text-xl ${isCompleted && 'line-through'}`}>{title}</p>
        <CardStatusText isCompleted={isCompleted} status={status} />
      </div>
      <CardButton onClick={onClick} id={id} label="Toggle Status" />
    </div>
  );
};
