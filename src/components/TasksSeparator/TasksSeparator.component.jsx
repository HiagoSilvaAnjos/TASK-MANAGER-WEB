// eslint-disable-next-line react/prop-types
const TasksSeparator = ({ icon, title }) => {
  return (
    <>
      <div className="flex gap-2 border-b-2 border-solid border-brand-border pb-2">
        {icon}
        <p className="text-sm text-brand-text-gray">{title}</p>
      </div>
    </>
  );
};

export default TasksSeparator;
