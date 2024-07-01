import SidebarButton from '../sidebarButton/sidebarButton.component';
import HomeIcon from '../../assets/icons/home.svg?react';
import TasksIcon from '../../assets/icons/tasks.svg?react';

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-64 bg-white font-medium">
        <div className="space-y-4 px-8 py-6">
          <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
          <p>
            Um simples{' '}
            <span className="text-[#00ADB5]">gerenciador de tarefas</span>.
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