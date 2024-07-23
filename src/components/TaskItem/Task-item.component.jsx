import PropTypes from 'prop-types';

const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00ADB5] bg-opacity-10 text-[#00ADB5] ';
    }

    if (task.status === 'in_progress') {
      return 'bg-[#FFAA04] bg-opacity-10 text-[#FFAA04] ';
    }

    if (task.status === 'not_started') {
      return 'bg-[#2B2D42] bg-opacity-10 text-[#35383E] ';
    }
  };

  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 font-medium ${getStatusClasses()}`}
    >
      {task.title}
    </div>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    status: PropTypes.string,
  }),
};
