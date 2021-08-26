import React, { useEffect, useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import { dbUrl } from './config';
import useHttp from './hooks/use-http.';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformData = (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const { isLoading, error, sendRequest: fetchTasks } = useHttp({ url: `${dbUrl}tasks.json` }, transformData);

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    // setTasks((prevTasks) => prevTasks.concat(task));\
    fetchTasks();
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
    </React.Fragment>
  );
}

export default App;
