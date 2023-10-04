type Container = {
  className: string;
  children: any;
};
const Container = ({ className = "", children }: Container) => {
  return (
    <div
      className={`w-full px-2 md:px-4 lg:px-8 container mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
