export const HeaderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <header className="border-b bg-gray-900 rounded-t-2xl p-8 flex flex-col gap-8">
    {children}
  </header>
);
