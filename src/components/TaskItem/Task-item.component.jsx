import PropTypes from 'prop-types';

import {
  CheckIcon,
  DetailsIcon,
  LoaderIcon,
  TrashIcon,
} from '../../assets/icons/index.js';
import Button from '../Button/Button.component.jsx';

const TaskItem = ({ task, handleCheckBoxClick, handleTaskDeleteClick }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00ADB5]  text-[#00ADB5] ';
    }

    if (task.status === 'in_progress') {
      return 'bg-[#FFAA04]  text-[#FFAA04] ';
    }

    if (task.status === 'not_started') {
      return 'bg-[#2B2D42] bg-opacity-10 text-[#35383E] ';
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 font-medium transition ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === 'done'}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckBoxClick(task.id)}
          />
          {task.status === 'done' && <CheckIcon />}
          {task.status === 'in_progress' && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={() => handleTaskDeleteClick(task.id)}>
          <TrashIcon className={'#9A9C9F'} />
        </Button>
        <a href="#" className="transition hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  handleCheckBoxClick: PropTypes.func.isRequired,
  handleTaskDeleteClick: PropTypes.func.isRequired,
};
