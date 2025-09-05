const RegularText = ({ children, className = "" }) => {
  return (
    <span
      className={`font-poppins text-text-green-fade font-normal text-[18px] leading-[150%] tracking-[0] ${className}`}
    >
      {children}
    </span>
  );
};

export default RegularText;
