import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const AddTaskDialog = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur">
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="mt-1 text-xl font-semibold text-[#35383E]">
          Nova tarefa
        </h2>
        <p>Insira as informações abaixo</p>
      </div>
    </div>,
    document.body
  );
};

export default AddTaskDialog;

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool,
};
