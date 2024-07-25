import {
  SunIcon,
  CloudSunIcon,
  MoonIcon,
  TrashIcon,
  AddIcon,
} from '../../assets/icons/index.js';

import Button from '../Button/Button.component';
import TasksSeparator from '../TasksSeparator/TasksSeparator.component.jsx';

import { useState } from 'react';

import { TASKS } from '../../constants/tasks.js';
import TaskItem from '../TaskItem/Task-item.component.jsx';

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const morningTasks = tasks.filter((task) => task.time === 'morning');
  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon');
  const eveningTasks = tasks.filter((task) => task.time === 'evening');

  const handleCheckBoxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      if (task.status === 'not_started') {
        return { ...task, status: 'in_progress' };
      }

      if (task.status === 'in_progress') {
        return { ...task, status: 'done' };
      }

      if (task.status === 'done') {
        return { ...task, status: 'not_started' };
      }

      return task;
    });

    setTasks(newTasks);
  };

  return (
    <>
      <div className="w-full space-y-6 px-8 py-16">
        <div className="flex w-full justify-between">
          <div>
            <span className="text-xs font-semibold text-[#00ADB5]">
              Minhas Tarefas
            </span>
            <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
          </div>

          <div className="flex items-center gap-3">
            <Button variant={'ghost'}>
              Limpar Tarefa
              <TrashIcon />
            </Button>
            <Button>
              Nova Tarefa
              <AddIcon />
            </Button>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6">
          <div className="space-y-3">
            <TasksSeparator icon={<SunIcon />} title={'Manhã'} />
            {morningTasks.map((task) => (
              <TaskItem
                task={task}
                key={task.id}
                handleCheckBoxClick={handleCheckBoxClick}
              />
            ))}
          </div>

          <div className="my-6 space-y-3">
            <TasksSeparator icon={<CloudSunIcon />} title={'Tarde'} />
            {afternoonTasks.map((task) => (
              <TaskItem
                task={task}
                key={task.id}
                handleCheckBoxClick={handleCheckBoxClick}
              />
            ))}
          </div>

          <div className="space-y-3">
            <TasksSeparator icon={<MoonIcon />} title={'Noite'} />
            {eveningTasks.map((task) => (
              <TaskItem
                task={task}
                key={task.id}
                handleCheckBoxClick={handleCheckBoxClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
