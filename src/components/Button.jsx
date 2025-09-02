import PropTypes from "prop-types";

const Button = ({ children, className = "", type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={`bg-white hover:bg-light-green hover:text-white cursor-pointer text-dark-green px-8 py-4 rounded text-sm font-medium hover:bg-opacity-90 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
