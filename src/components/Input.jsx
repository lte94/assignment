import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const InputStyle = styled.div`
  padding: 20px;
  background-color: skyblue;
`;

function Input({ setTodos }) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleSubmitClick = event => {
    event.preventDefault();

    const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos(prev => {
      return [...prev, newTodo];
    });

    setTitle('');
    setContents('');
  };

  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };

  const handleChangeContents = event => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmitClick}>
        <InputStyle>
          제목 : <input value={title} onChange={handleChangeTitle} />
          내용 : <input value={contents} onChange={handleChangeContents} />
          <button>추가</button>
        </InputStyle>
      </form>
    </section>
  );
}

export default Input;
