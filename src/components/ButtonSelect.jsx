const ButtonSelect = ({ item, todos, setTodos }) => {
  //완료 버튼 클릭시
  const clickDoneButtonHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //취소 버튼 클릭시
  const clickCancelButtonHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  if (item.isDone === true) {
    return (
      <button
        className="clearBtn"
        onClick={() => clickCancelButtonHandler(item.id)}
      >
        취소
      </button>
    );
  } else {
    return (
      <button
        className="clearBtn"
        onClick={() => clickDoneButtonHandler(item.id)}
      >
        완료
      </button>
    );
  }
};

export default ButtonSelect;
