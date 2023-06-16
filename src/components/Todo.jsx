import ButtonSelect from "./ButtonSelect";

// 진행중인 TodoList
const Todo = ({ item, todos, setTodos }) => {
  // 삭제 버튼 클릭 시
  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoCard">
      <h3>{item.title}</h3>
      {item.body}
      <div className="btns">
        <button
          className="deleteBtn"
          onClick={() => clickRemoveButtonHandler(item.id)}
        >
          삭제하기
        </button>
        <ButtonSelect item={item} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todo;
