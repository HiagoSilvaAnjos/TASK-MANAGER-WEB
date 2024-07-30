import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import InputErrorMessage from '../InputErrorMessage/InputErrorMessage';
import InputLabel from '../InputLabel/InputLabel';

const Input = forwardRef(({ errorMessage, label, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9CPF]"
        ref={ref}
        {...rest}
      />
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};
