export const CardStatusText: React.FC<{
  isCompleted: boolean;
  status: string;
}> = ({ isCompleted, status }) => (
  <p className={` text-lg ${isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
    {status}
  </p>
);
