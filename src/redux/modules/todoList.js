
// action value
  const INPUT = "todoList/INPUT"
  const DELETE = "todoList/DELETE"
  const TOGGLE = "todoList/TOGGLE"

 // action creator
  export const addTodo = (payload) => {
    return{
      type: INPUT,
      payload: payload
    }
  }


  export const deleteTodo = (payload) => {
    return{
      type: DELETE,
      payload: payload
    }
  }

  export const toggleTodo = (payload) => {
    return{
      type: TOGGLE,
      payload: payload
    }
  }


// 초기 상태값(state)
const initialState = [{
  id: 0,
  title: "리액트 공부하기",
  body: "리액트 기초를 공부해봅시다.",
  isDone: false,
}];

// 리듀서 : state에 변화를 일으키는 함수
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case INPUT: 
      return [...state, action.payload]
      
    case DELETE:
      return state.filter((item) => item.id !== action.payload)

    case TOGGLE:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })

    default:
      return state;
  }
};


export default todoList