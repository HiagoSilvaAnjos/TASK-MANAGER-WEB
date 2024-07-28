import PropTypes from 'prop-types';

const InputLabel = (props) => {
  return (
    <label
      className="text-sm font-semibold text-[#35383E]"
      htmlFor="time"
      {...props}
    >
      {props.children}
    </label>
  );
};

export default InputLabel;

InputLabel.propTypes = {
  children: PropTypes.string,
};
