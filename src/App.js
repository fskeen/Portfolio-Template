import React from "react";
import "./App.css";
import NavBar from "./Shared_Styles/Navigation/NavBar";
import AppRouter from "./Components/AppRouter/AppRouter";
import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <AppRouter />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default App;
