export const FeatureWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-full border border-white rounded-2xl flex flex-col gap-8 lg:max-w-[1024px]">
    {children}
  </div>
);
