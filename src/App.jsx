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
  gap: 2rem;
  border: none;
  border-radius: 10px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #111;
  margin-top: 1rem;
`;

const SearchBar = styled.input`
  padding: 6px 12px;
  width: 500px;
  max-width: 300px;
`;

const SearchButton = styled.button`
  padding: ;
`;

export default App;
