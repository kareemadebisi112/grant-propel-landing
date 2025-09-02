const LandingLayout = ({ children }) => {
  return (
    <>
      <div className="flex justify-self-center justify-center h-fit w-full relative container overflow-x-hidden">
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};
export default LandingLayout;
