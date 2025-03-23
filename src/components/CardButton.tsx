export const CardButton: React.FC<{
  onClick: (id: number) => void;
  label: string;
  id: number;
}> = ({ onClick, label, id }) => (
  <button
    onClick={() => onClick(id)}
    className="px-4 py-2 uppercase rounded-lg bg-purple-500 text-white font-medium  transition hover:bg-purple-600 active:scale-98 cursor-pointer"
  >
    {label}
  </button>
);
