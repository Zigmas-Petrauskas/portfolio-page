import PropTypes from "prop-types";

const inputPropTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  icon: PropTypes.node,
};

export default inputPropTypes;
