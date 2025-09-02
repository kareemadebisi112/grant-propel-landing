import PropTypes from "prop-types";

const BorderRadiusCard = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        overflow-hidden
        w-full h-fit
        bg-white
        rounded-tl-[120px]
        rounded-tr-[20px]
        rounded-br-[120px]
        rounded-bl-[20px]
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

BorderRadiusCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default BorderRadiusCard;
