import React from 'react'
import { styled } from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const StDetailLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding-top: 100px
`

const StDetailContainer = styled.div`
  width: 500px;
  height: 300px;

  background-color: white;

  box-shadow: 1px 1px 5px gray;

  border-radius: 10px;

  padding: 20px
`

const StDetailBtn = styled.button`
  padding: 5px 20px;

  /* margin: 20px 3px 20px 3px; */

  border-radius: 10px;

  width: 100px;

  background-color: white;

  float: right;

  cursor: pointer;

  &:hover {
    background-color: gray
  }
`

function Detail() {
  const {id} = useParams();


  // 이전으로 버튼 클릭 시
  const navigate = useNavigate();

  const todos = useSelector((state)=>{
    return state.todoList
  })

  const todo = todos.find((todo) => todo.id == id)

  return (
    <StDetailLayout>
      <StDetailContainer>
        <span>ID: {id}</span>
        <StDetailBtn onClick={() => {
          navigate('/')
        }}>이전으로</StDetailBtn>
        <h2>{todo.title}</h2>
        <p>{todo.body}</p>
      </StDetailContainer>
    </StDetailLayout>
  )
}

export default Detail
