// 중앙 데이터 관리소를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import todoList from "redux/modules/todoList";

const rootReducer = combineReducers({
  todoList,
});
const store = createStore(rootReducer);

export default store;
