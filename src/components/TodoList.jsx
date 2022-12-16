import React from 'react';
import Todo from './Todo';

function TodoList({ isActive, todos, setTodos }) {
  return (
    <>
      <h3>{isActive === true ? '해야할 것' : '완료된 것'}</h3>

      {todos
        .filter(item => item.isDone === !isActive)
        .map(item => {
          return (
            <div
              style={{
                border: '1px solid black',
                padding: '20px',
              }}
            >
              <Todo
                item={item}
                isActive={isActive}
                setTodos={setTodos}
                key={item.id}
              />
            </div>
          );
        })}
    </>
  );
}

export default TodoList;
