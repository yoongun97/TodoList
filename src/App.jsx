import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

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

  // 추가 버튼 클릭 시
  const clickAddButtonHandler = (e) => {
    e.preventDefault();

    if (title.length === 0) {
      alert("제목을 입력해주세요.");
    } else if (body.length === 0) {
      alert("내용을 입력해주세요");
    } else {
      const newTodo = {
        id: todos.length + 1,
        title,
        body,
        isDone,
      };

      setTodos([...todos, newTodo]);
      setTitle("");
      setBody("");
    }
  };

  // 삭제 버튼 클릭 시
  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

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

  return (
    <div className="layout">
      <div className="title">
        <p className="mainTitle">My Todo List</p>
        <p className="subTitle">React</p>
      </div>
      <div className="addTodo">
        제목
        <input value={title} onChange={newTitleHandler} />
        내용
        <input value={body} onChange={newBodyHandler} />
        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      <div className="cardList">
        <h3>Working..🔥</h3>
        <div className="todoList">
          {todos
            .filter((item) => {
              return item.isDone === false;
            })
            .map((item) => {
              return (
                <Todo
                  key={item.id}
                  item={item}
                  clickRemoveButtonHandler={clickRemoveButtonHandler}
                  clickDoneButtonHandler={clickDoneButtonHandler}
                  clickCancelButtonHandler={clickCancelButtonHandler}
                />
              );
            })}
        </div>
        <h3>Done..!🎉</h3>
        <div className="todoList">
          {todos
            .filter((item) => {
              return item.isDone === true;
            })
            .map((item) => {
              return (
                <Todo
                  key={item.id}
                  item={item}
                  clickRemoveButtonHandler={clickRemoveButtonHandler}
                  clickDoneButtonHandler={clickDoneButtonHandler}
                  clickCancelButtonHandler={clickCancelButtonHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

// 진행중인 TodoList
const Todo = ({
  item,
  clickRemoveButtonHandler,
  clickDoneButtonHandler,
  clickCancelButtonHandler,
}) => {
  return (
    <div key={item.id} className="todoCard">
      <h3>{item.title}</h3>
      {item.body}
      <div className="btns">
        <button
          className="deleteBtn"
          onClick={() => clickRemoveButtonHandler(item.id)}
        >
          삭제하기
        </button>
        <ButtonSelect
          item={item}
          clickDoneButtonHandler={clickDoneButtonHandler}
          clickCancelButtonHandler={clickCancelButtonHandler}
        />
      </div>
    </div>
  );
};

const ButtonSelect = ({
  item,
  clickDoneButtonHandler,
  clickCancelButtonHandler,
}) => {
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

export default App;
