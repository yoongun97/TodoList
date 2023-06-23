import { styled } from "styled-components";
import { toggleTodo } from "redux/modules/todoList";
import { useDispatch } from "react-redux";

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

const ButtonSelect = ({ item, todos }) => {
  const dispatch = useDispatch();

  // 완료/취소 버튼 클릭시
  const clickUpdateButtonHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <StBtn
      borderColor="green"
      onClick={() => clickUpdateButtonHandler(item.id)}
    >
      {item.isDone ? "취소" : "완료"}
    </StBtn>
  );
};

export default ButtonSelect;
