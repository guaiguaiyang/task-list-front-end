import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const initialCopy = TASKS.map((task) => {
    return { ...task };
  });

  console.log(initialCopy);

  const [tasksList, setTasksList] = useState(initialCopy);

  // const updateComplete = (updatedTask) => {
  //   console.log('update task called');
  //   const newTasksList = tasksList.map((task) => {
  //     if (task.id === updatedTask.id) {
  //       return updatedTask;
  //     } else {
  //       return task;
  //     }
  //   });
  //   setTasksList(newTasksList);
  // };

  const updateComplete = (taskId) => {
    console.log('update task called');
    const newTasksList = tasksList.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setTasksList(newTasksList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={tasksList} updateComplete={updateComplete} />
        </div>
      </main>
    </div>
  );
};

export default App;
