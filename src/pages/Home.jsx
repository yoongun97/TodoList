import Todo from "../components/Todo";
import Input from "components/Input";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;

  margin: 0 auto;
`;

const TitleBox = styled.header`
  height: 50px;

  display: flex;
  flex-direction: row;

  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;

  margin-bottom: 20px;

  justify-content: space-between;

  box-shadow: 1px 1px 5px gray;
`;

const StTitle = styled.p`
  font-weight: bold;
  color: #687b48;
  font-size: ${(props) => props.fontSize};
  margin-top: ${(props) => props.marginTop};
`;

const StCardContainer = styled.div`
  border: 1px solid gray;
  border-radius: 10px;

  background-color: beige;

  margin-top: 20px;
`;

const StCardTitle = styled.h3`
  margin-left: 20px;

  color: #687b48;
`;

const StCardList = styled.div`
  padding: 10px;
  display: flex;
  gap: 12px;

  flex-wrap: wrap;
`;

function Home() {
  const todos = useSelector((state) => {
    return state.todoList;
  });

  return (
    <StLayout>
      <TitleBox>
        <StTitle fontSize="30px" marginTop="10px">
          My Todo List
        </StTitle>
        <StTitle fontSize="20px" marginTop="20px">
          React
        </StTitle>
      </TitleBox>
      <Input todos={todos} />
      <StCardContainer>
        <StCardTitle>Working..🔥</StCardTitle>
        <StCardList>
          {todos
            .filter((item) => !item.isDone)
            .map((item) => {
              return <Todo key={item.id} item={item} todos={todos} />;
            })}
        </StCardList>
        <StCardTitle>Done..!🎉</StCardTitle>
        <StCardList>
          {todos
            .filter((item) => item.isDone)
            .map((item) => {
              return <Todo key={item.id} item={item} todos={todos} />;
            })}
        </StCardList>
      </StCardContainer>
    </StLayout>
  );
}

export default Home;
