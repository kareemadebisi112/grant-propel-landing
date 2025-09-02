import PropTypes from "prop-types";

const Avatar = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-10 h-10 rounded-full border-2 border-white object-cover"
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
