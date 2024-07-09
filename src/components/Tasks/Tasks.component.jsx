import Button from '../Button/Button.component';
import AddIcon from '../../assets/icons/add.svg?react';
import TrashIcon from '../../assets/icons/trash.svg?react';
import { SunIcon, CloudSunIcon, MoonIcon } from '../../assets/icons/index.js';
import TasksSeparator from '../TasksSeparator/TasksSeparator.component.jsx';

const Tasks = () => {
  return (
    <>
      <div className="w-full px-8 py-16">
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
          </div>

          <div className="my-6 space-y-3">
            <TasksSeparator icon={<CloudSunIcon />} title={'Tarde'} />
          </div>

          <div className="space-y-3">
            <TasksSeparator icon={<MoonIcon />} title={'Noite'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
