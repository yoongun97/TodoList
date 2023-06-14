import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <header className="title">My Todo List React</header>
      <div className="addTodo">
        제목
        <input />
        내용
        <input />
        <button>추가하기</button>
      </div>
      <h3>Working..🔥</h3>
      <div className="todoList">
        <div className="todoCard">
          <h3>리액트 공부하기</h3>
          리액트 기초를 공부해봅시다.
          <div className="btns">
            <button>삭제하기</button>
            <button>완료</button>
          </div>
        </div>
      </div>
      <h3>Done..!🎉</h3>
      <div className="todoList">
        <div className="todoCard">
          <h3>리액트 공부하기</h3>
          리액트 기초를 공부해봅시다.
          <div className="btns">
            <button>삭제하기</button>
            <button>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
