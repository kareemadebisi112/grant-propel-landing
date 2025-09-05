const LandingLayout = ({ children }) => {
  return (
    <>
      <div className="flex justify-self-center justify-center h-fit w-full relative max-w-8xl overflow-x-hidden">
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};
export default LandingLayout;
