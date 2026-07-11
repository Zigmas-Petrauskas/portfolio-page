import PropTypes from "prop-types";

const buttonPropTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default buttonPropTypes;
