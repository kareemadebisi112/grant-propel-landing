const LandingLayout = ({ children }) => {
  return (
    <>
      <div className="bg-amber-300 flex justify-self-center justify-center h-fit w-full relative max-w-[1440px] overflow-x-hidden">
        {children}
      </div>
    </>
  );
};
export default LandingLayout;
