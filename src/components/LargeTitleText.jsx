const LargeTitleText = ({ children, className = "" }) => {
  return (
    <span
      className={`font-poppins text-text-green font-medium text-[42px] leading-[130%] tracking-[0] ${className}`}
    >
      {children}
    </span>
  );
};

export default LargeTitleText;
