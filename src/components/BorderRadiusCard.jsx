import PropTypes from "prop-types";

const BorderRadiusCard = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        overflow-hidden
        w-full h-fit
        rounded-tr-[120px]
        rounded-tl-[20px]
        rounded-bl-[120px]
        rounded-br-[20px]
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
