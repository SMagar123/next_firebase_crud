const GridContainer = ({
  className = "",
  children,
}: {
  className: string;
  children: any;
}) => {
  return (
    <div
      className={`mx-4 grid grid-cols-4 gap-8 lg:mx-0 lg:grid-cols-12 lg:gap-8  ${className}`}
    >
      {children}
    </div>
  );
};

export default GridContainer;
