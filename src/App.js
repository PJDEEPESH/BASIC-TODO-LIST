import { useState } from 'react';
import './App.css';

function App() {
  const [todoInput, setTodoInput] = useState(''); 

  const [todoList, setTodos] = useState([
    {
      id: 1,
      task: 'Learn React',
      completed: false, 
    },
    {
      id: 2,
      task: 'Learn Angular',
      completed: false,
    },
  ]);

  // Use a state variable for nextId
  const [nextId, setNextId] = useState(3); 

  function addNewTodo() {
    if (todoInput === '') {
      alert('Please enter a task');
      return; // Prevent adding empty tasks
    }

    const newTodo = {
      id: nextId,
      task: todoInput,
      completed: false,
    };

    setTodos([...todoList, newTodo]);
    setTodoInput(''); 

    
    setNextId(nextId + 1);
  }

  function deleteTodo(id) {
    const filteredTodos = todoList.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function toggleCompletion(id) {
    setTodos(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">To-Do App using React</h3>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)} 
          placeholder="Enter a task" 
        />
        <button onClick={addNewTodo} className="btn btn-primary">
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todoList.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)} 
            />{' '}
            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.task}
            </p>
            <button onClick={() => deleteTodo(todo.id)} className="btn">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
