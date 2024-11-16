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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 700px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 40px,
    rgba(0, 0, 0, 0.12) 0px -10px 20px, rgba(0, 0, 0, 0.12) 0px 3px 4px,
    rgba(0, 0, 0, 0.17) 0px 10px 10px, rgba(0, 0, 0, 0.09) 0px -2px 3px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  border: none;
  border-radius: 10px;
  background-color: snow;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #111;
  margin-top: 1.2rem;
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

export default App;
