import ButtonSelect from "./ButtonSelect";
import { styled } from "styled-components";
import { Post } from "redux/modules/todoList";
import { useDispatch } from "react-redux";

const StBox = styled.div`
  min-width: 300px;
  height: 150px;

  background-color: white;

  box-shadow: 1px 1px 5px gray;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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

// 진행중인 TodoList
const Todo = ({ item, todos}) => {

  const dispatch = useDispatch()

  // 삭제 버튼 클릭 시
  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    dispatch(Post(newTodos))
  };

  return (
    <StBox>
      <h3>{item.title}</h3>
      {item.body}
      <div className="btns">
        <StBtn
          borderColor="red"
          onClick={() => clickRemoveButtonHandler(item.id)}
        >
          삭제하기
        </StBtn>
        <ButtonSelect item={item} todos={todos} />
      </div>
    </StBox>
  );
};

export default Todo;