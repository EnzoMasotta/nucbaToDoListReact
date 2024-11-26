import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Title>Nuctasks</Title>
      <FormContainer>
        <SearchBar placeholder="¿Qué tarea desea agregar?"></SearchBar>
        <SearchButton type="button">Agregar</SearchButton>
      </FormContainer>
      <Container>
        <Task>Tarea 1</Task>
        <TaskButton type="button">Borrar</TaskButton>
      </Container>
      <Container>
        <Task>Tarea 2</Task>
        <TaskButton type="button">Borrar</TaskButton>
      </Container>
      <DeleteAll>Borrar todas</DeleteAll>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 50vw;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  padding: 2rem 0;
  border: none;
  border-radius: 10px;
  background-color: snow;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #111;
`;

const SearchBar = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 13px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  background-color: #596fff;
  color: white;
  border: none;
  border-radius: 5px;
`;

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e7e7e7;
`;

const Task = styled.p``;

const TaskButton = styled.button`
  padding: 6px 12px;
  font-size: 13px;
  cursor: pointer;
  background-color: #ff4747;
  color: white;
  border: none;
  border-radius: 5px;
`;

const DeleteAll = styled.button`
  margin-top: 1rem;
  padding: 8px 16px;
  width: 90%;
  font-size: 13px;
  cursor: pointer;
  background-color: #ff4747;
  color: white;
  border: none;
  border-radius: 5px;
`;

export default App;
