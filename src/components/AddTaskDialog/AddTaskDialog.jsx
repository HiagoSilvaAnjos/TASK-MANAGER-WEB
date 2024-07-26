import './AddTaskDialog.css';

import PropTypes from 'prop-types';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Button from '../Button/Button.component';
import Input from '../Input/Input';

const AddTaskDialog = ({ isOpen, handleDialogClose }) => {
  const nodeRef = useRef();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-[#35383E]">
                Nova tarefa
              </h2>
              <p className="my-1 mb-4 text-sm text-[#9A9C9F]">
                Insira as informações abaixo
              </p>
              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label={'Título'}
                  placeholder={'Insira o título da tarefa'}
                />
                <Input
                  id="time"
                  label={'Horário'}
                  placeholder={'Insira o horário da tarefa'}
                />
                <Input
                  id="description"
                  label={'Descrição'}
                  placeholder={'Descreva sua tarefa'}
                />
                <div className="flex gap-3">
                  <Button
                    onClick={handleDialogClose}
                    variant="secondary"
                    className="w-full"
                    size="large"
                  >
                    Cancelar
                  </Button>
                  <Button className="w-full" size="large">
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  );
};

export default AddTaskDialog;

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool,
  handleDialogClose: PropTypes.func,
};
