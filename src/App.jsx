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

  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const [isDone] = useState(false);

  // input값 추가
  const newTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const newBodyHandler = (event) => {
    setBody(event.target.value);
  };

  // 추가 버튼 클릭 시
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title,
      body,
      isDone,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setBody("");
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
      <header className="mainTitle">My Todo List React</header>
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
                <Asis
                  key={item.id}
                  item={item}
                  clickRemoveButtonHandler={clickRemoveButtonHandler}
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
const Todo = ({ item, clickRemoveButtonHandler, clickDoneButtonHandler }) => {
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
        <button
          className="clearBtn"
          onClick={() => clickDoneButtonHandler(item.id)}
        >
          완료
        </button>
      </div>
    </div>
  );
};

// 완료된 Asis
const Asis = ({ item, clickRemoveButtonHandler, clickCancelButtonHandler }) => {
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
        <button
          className="clearBtn"
          onClick={() => clickCancelButtonHandler(item.id)}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default App;