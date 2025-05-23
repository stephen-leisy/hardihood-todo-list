import { TaskStatusFilterOptions } from '@/enums/TaskFilters';

export const FilterButton: React.FC<{
  title: TaskStatusFilterOptions;
  onClick: (title: TaskStatusFilterOptions) => void;
  isActive: boolean;
}> = ({ title, onClick, isActive }) => {
  return (
    <button
      onClick={() => onClick(title)}
      className={`px-4 py-2 rounded-lg text-sm uppercase transition  
        ${
          isActive
            ? 'bg-purple-500 text-white cursor-auto'
            : 'text-gray-400 hover:text-gray-100 cursor-pointer'
        }`}
    >
      {title}
    </button>
  );
};
