import Button from '../Button/Button.component';
import AddIcon from '../../assets/icons/add.svg?react';
import TrashIcon from '../../assets/icons/trash.svg?react';
import { SunIcon, CloudSunIcon, MoonIcon } from '../../assets/icons/index.js';

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

        {/* Lista de Tarefas */}
        <div className="rounded-xl bg-white p-6">
          {/* MANHÃ */}
          <div className="space-y-3">
            <div className="flex gap-2 border-b-2 border-solid border-[#F4F4F5] pb-2">
              <SunIcon />
              <p className="text-sm text-[#9A9C9F]">Manhã</p>
            </div>
          </div>

          {/* TARDE */}
          <div className="my-6 space-y-3">
            <div className="flex gap-2 border-b-2 border-solid border-[#F4F4F5] pb-2">
              <CloudSunIcon />
              <p className="text-sm text-[#9A9C9F]">Tarde</p>
            </div>
          </div>

          {/* NOITE */}
          <div className="space-y-3">
            <div className="flex gap-2 border-b-2 border-solid border-[#F4F4F5] pb-2">
              <MoonIcon />
              <p className="text-sm text-[#9A9C9F]">Noite</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
