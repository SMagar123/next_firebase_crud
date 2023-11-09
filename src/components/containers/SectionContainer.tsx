const SectionContainer = ({
  className = "",
  children,
}: {
  className?: string;
  children: any;
}) => {
  return <section className={className}>{children}</section>;
};

export default SectionContainer;
