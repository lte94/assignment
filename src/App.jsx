import React, { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <>
      <Header>Todo List</Header>
      <main>
        <Input setTodos={setTodos} />
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </main>
      <footer>푸터</footer>
    </>
  );
}

const initialState = [
  {
    title: '제목1',
    contents: '내용1',
    isDone: false,
    id: uuidv4(),
  },
  {
    title: '제목2',
    contents: '내용2',
    isDone: false,
    id: uuidv4(),
  },
  {
    title: '제목3',
    contents: '내용3',
    isDone: false,
    id: uuidv4(),
  },
];

export default App;
