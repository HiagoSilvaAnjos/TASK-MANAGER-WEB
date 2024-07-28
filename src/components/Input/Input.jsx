import PropTypes from 'prop-types';

import InputLabel from '../InputLabel/InputLabel';

const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9CPF]"
        {...rest}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string,
};
