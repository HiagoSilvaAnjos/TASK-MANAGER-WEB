import './AddTaskDialog.css';

import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button/Button.component';
import Input from '../Input/Input';
import TimeSelect from '../TimeSelect/TimeSelect';

const AddTaskDialog = ({ isOpen, handleDialogClose, handleAddTask }) => {
  const [errors, setErrors] = useState([]);

  const nodeRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const timeRef = useRef();

  const handleSaveTask = () => {
    const newErrors = [];

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const time = timeRef.current.value;

    if (!title.trim()) {
      newErrors.push({
        inputName: 'title',
        message: 'Título é obrigatório!',
      });
    }

    if (!time.trim()) {
      newErrors.push({
        inputName: 'time',
        message: 'Horário é obrigatório!',
      });
    }

    if (!description.trim()) {
      newErrors.push({
        inputName: 'description',
        message: 'Descrição é obrigatória!',
      });
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
      return;
    }

    handleAddTask({
      id: uuidv4(),
      title,
      time,
      description,
      status: 'not_started',
    });

    handleDialogClose();
  };

  const titleError = errors.find((error) => error.inputName === 'title');
  const descriptionError = errors.find(
    (error) => error.inputName === 'description'
  );
  const timeError = errors.find((error) => error.inputName === 'time');

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
              <h2 className="text-xl font-semibold text-brand-dark-blue">
                Nova tarefa
              </h2>
              <p className="my-1 mb-4 text-sm text-brand-text-gray">
                Insira as informações abaixo
              </p>
              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label={'Título'}
                  placeholder={'Insira o título da tarefa'}
                  errorMessage={titleError?.message}
                  ref={titleRef}
                />

                <TimeSelect ref={timeRef} errorMessage={timeError?.message} />

                <Input
                  id="description"
                  label={'Descrição'}
                  placeholder={'Descreva sua tarefa'}
                  ref={descriptionRef}
                  errorMessage={descriptionError?.message}
                />

                <div className="flex gap-3">
                  <Button
                    onClick={handleDialogClose}
                    color="secondary"
                    className="w-full"
                    size="large"
                  >
                    Cancelar
                  </Button>
                  <Button
                    color="primary"
                    className="w-full"
                    size="large"
                    onClick={handleSaveTask}
                  >
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
  handleAddTask: PropTypes.func,
};
