import React from 'react';

function Todo({ item, isActive, setTodos }) {
  const handleDeleteClick = () => {
    setTodos(prev => prev.filter(t => t.id !== item.id));
  };

  const handleSwitchClick = () => {
    setTodos(prev =>
      prev.map(t => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <>
      <div>
        <h4>{item.title}</h4>
        <p>{item.contents}</p>
        <button onClick={handleSwitchClick}>
          {isActive ? '완료' : '취소'}
        </button>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </>
  );
}

export default Todo;
