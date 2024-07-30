import { HomeIcon, TasksIcon } from '../../assets/icons/index.js';
import SidebarButton from '../sidebarButton/sidebarButton.component';

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-72 bg-white font-medium">
        <div className="space-y-4 px-8 py-6">
          <h1 className="text-xl font-semibold text-brand-primary">
            Task Manager
          </h1>
          <p>
            Um simples{' '}
            <span className="text-brand-primary">gerenciador de tarefas</span>.
          </p>
        </div>

        <div className="flex flex-col gap-2 p-2">
          <SidebarButton variant={'unselected'}>
            <HomeIcon />
            Início
          </SidebarButton>
          <SidebarButton variant={'selected'}>
            <TasksIcon />
            Minhas Tarefas
          </SidebarButton>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
