import React, { useState, useEffect } from 'react';

const AppHook = props => {
  const [count, setCount] = useState(props.initialCount);
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('marie');

  useEffect(() => {
    console.log('called effect');
    const datas = JSON.parse(localStorage.getItem('tasks'));
    if (datas) {
      setTasks(datas);
    }
  }, []);

  useEffect(() => {
    document.title = count;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [count, tasks]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React Hooks {name}</h1>
      <p>{count}</p>
      <button onClick={incrementCount}>+1</button>
      <button onClick={() => setCount(props.initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
};

export default AppHook;
