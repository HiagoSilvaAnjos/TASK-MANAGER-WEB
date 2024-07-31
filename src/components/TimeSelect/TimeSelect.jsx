import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import InputErrorMessage from '../InputErrorMessage/InputErrorMessage';
import InputLabel from '../InputLabel/InputLabel';

const TimeSelect = forwardRef((props, ref) => {
  return (
    <>
      <div className="flex flex-col gap-1 text-left">
        <InputLabel htmlFor="time">Horário</InputLabel>
        <select
          ref={ref}
          id="time"
          className="rounded-lg border border-solid border-brand-border px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
          {...props}
        >
          <option value="morning">Manhã</option>
          <option value="afternoon">Tarde</option>
          <option value="evening">Noite</option>
        </select>
      </div>
      {props.errormessage && (
        <InputErrorMessage>{props.errormessage}</InputErrorMessage>
      )}
    </>
  );
});

TimeSelect.displayName = 'TimeSelect';

export default TimeSelect;

TimeSelect.propTypes = {
  errormessage: PropTypes.string,
};
