import Tasks from './components/Tasks/Tasks.component';
import Sidebar from './components/sidebar/sidebar.component';

function App() {
  return (
    <>
      <div className="flex gap-9">
        <Sidebar />
        <Tasks />
      </div>
    </>
  );
}

export default App;
