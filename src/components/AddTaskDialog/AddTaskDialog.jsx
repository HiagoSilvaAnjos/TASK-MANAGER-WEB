import './AddTaskDialog.css';

import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button/Button.component';
import Input from '../Input/Input';
import TimeSelect from '../TimeSelect/TimeSelect';

const AddTaskDialog = ({ isOpen, handleDialogClose, handleAddTask }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('morning');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setTitle('');
    setTime('morning');
    setDescription('');
    setErrors([]);
  }, [isOpen]);

  const nodeRef = useRef();

  const handleSaveTask = () => {
    const newErrors = [];

    if (!title.trim()) {
      newErrors.push({
        inputName: 'title',
        message: 'Título é obrigatório!',
      });
    }

    if (!description.trim()) {
      newErrors.push({
        inputName: 'description',
        message: 'Descrição é obrigatória!',
      });
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
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
                  onChange={(event) => setTitle(event.target.value)}
                  errorMessage={titleError?.message}
                />

                <TimeSelect onChange={(event) => setTime(event.target.value)} />

                <Input
                  id="description"
                  label={'Descrição'}
                  placeholder={'Descreva sua tarefa'}
                  onChange={(event) => setDescription(event.target.value)}
                  errorMessage={descriptionError?.message}
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
                  <Button
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
