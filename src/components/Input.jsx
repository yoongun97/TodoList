import uuid from "react-uuid";
import { useState } from "react";
import { styled } from "styled-components";
import { addTodo } from "redux/modules/todoList";
import { useDispatch } from "react-redux";

const StAddTodo = styled.div`
  width: 80%;

  border-radius: 40px;

  border: 1px solid gray;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;

  margin-left: 20px;
`;

const StAddInput = styled.input`
  margin-left: 10px;
  margin-right: 10px;

  width: 200px;
  height: 35px;

  border-radius: 10px;
  border: 1px solid gray;
`;

const StAdBtn = styled.button`
  float: right;
  margin: auto 20px auto 0;

  padding: 10px 30px;

  border: none;
  border-radius: 10px;

  color: white;
  background-color: black;

  &:hover {
    background-color: gray;
  }
`;

// 추가 기능
const Input = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isDone] = useState(false);

  // input값 추가
  const newTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const newBodyHandler = (event) => {
    setBody(event.target.value);
  };

  const dispatch = useDispatch()

  // 추가 버튼 클릭 시
  const clickAddButtonHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      title,
      body,
      isDone,
    };

    if (title.length === 0) {
      alert("제목을 입력해주세요.");
    } else if (body.length === 0) {
      alert("내용을 입력해주세요");
    } else {
      dispatch(addTodo(newTodo))
      setTitle("");
      setBody("");
    }
  };

  return (
    <StAddTodo>
      제목
      <StAddInput value={title} onChange={newTitleHandler} />
      내용
      <StAddInput value={body} onChange={newBodyHandler} />
      <StAdBtn onClick={clickAddButtonHandler}>추가하기</StAdBtn>
    </StAddTodo>
  );
};

export default Input;