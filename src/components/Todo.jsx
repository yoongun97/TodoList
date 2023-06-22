import ButtonSelect from "./ButtonSelect";
import { styled } from "styled-components";
import { deleteTodo } from "redux/modules/todoList";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const StBox = styled.div`
  min-width: 300px;
  height: 200px;

  background-color: white;

  box-shadow: 1px 1px 5px gray;

  border-radius: 10px;
/* 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */

  padding: 20px
`;

const StTitleBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px

`

const StTitleBtn = styled.button`
  padding: 5px 20px;

  border: none;
  

  width: 100px;
  height: 35px;

  background-color: white;
    float: right;


  cursor: pointer;

  &:hover {
    font-size: 14px
  }
`

const StBtn = styled.button`
  padding: 10px 30px;

  margin: 50px 3px 20px 3px;

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
    dispatch(deleteTodo(id))
  };

  // 상세보기 버튼 클릭 시
  const navigate = useNavigate();

  return (
    <StBox>
      <StTitleBox>
        <h3>{item.title}</h3>
        <StTitleBtn onClick={() => {
          navigate(`/detail/${item.id}`)
        }}>상세보기</StTitleBtn>
      </StTitleBox>
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