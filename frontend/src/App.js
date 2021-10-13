import axios from 'axios';
import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const tasks = await axios('/api/tasks');
      setTasks(tasks);
    }

    getTasks();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>{JSON.stringify(tasks, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
