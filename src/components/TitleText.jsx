const TitleText = ({ children, className = "" }) => {
  return (
    <span
      className={`text-light-green font-poppins font-medium text-[16px] leading-[150%] tracking-[0.1em] uppercase ${className}`}
    >
      {children}
    </span>
  );
};

export default TitleText;
