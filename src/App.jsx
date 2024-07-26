import { Toaster } from 'sonner';

import Sidebar from './components/sidebar/sidebar.component';
import Tasks from './components/Tasks/Tasks.component';

function App() {
  return (
    <>
      <div className="flex">
        <Toaster
          toastOptions={{
            style: {
              color: '#35383E',
            },
          }}
        />
        <Sidebar />
        <Tasks />
      </div>
    </>
  );
}

export default App;
