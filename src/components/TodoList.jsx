import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const Box = styled.div`
  border: 3px solid green;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  text-align: center;
`;

function TodoList({ isActive, todos, setTodos }) {
  return (
    <>
      <h3>{isActive === true ? '해야할 것' : '완료된 것'}</h3>

      {todos
        .filter(item => item.isDone === !isActive)
        .map(item => {
          return (
            <div key={item.id}>
              <Box>
                <Todo item={item} isActive={isActive} setTodos={setTodos} />
              </Box>
            </div>
          );
        })}
    </>
  );
}

export default TodoList;
