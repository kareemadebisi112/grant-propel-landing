const MediumText = ({ children, className = "" }) => {
  return (
    <span
      className={`font-poppins font-medium text-[26px] leading-[150%] tracking-[0] ${className}`}
    >
      {children}
    </span>
  );
};

export default MediumText;
