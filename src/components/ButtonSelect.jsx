import { styled } from "styled-components";

const StBtn = styled.button`
  padding: 10px 30px;

  margin: 20px 3px 20px 3px;

  border-radius: 10px;
  border-width: 3px;

  width: 130px;

  background-color: white;

  cursor: pointer;

  &:hover {
    font-size: 15px;
  }

  border-color: ${(props) => props.borderColor};
`;

const ButtonSelect = ({ item, todos, setTodos }) => {
  // 완료/취소 버튼 클릭시
  const clickUpdateButtonHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  if (item.isDone === true) {
    return (
      <StBtn
        borderColor="green"
        onClick={() => clickUpdateButtonHandler(item.id)}
      >
        취소
      </StBtn>
    );
  } else {
    return (
      <StBtn
        borderColor="green"
        onClick={() => clickUpdateButtonHandler(item.id)}
      >
        완료
      </StBtn>
    );
  }
};

export default ButtonSelect;
