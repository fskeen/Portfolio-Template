import React from "react";
import "./App.css";
import NavBar from "./Shared_Styles/Navigation/NavBar";
import AppRouter from "./Components/AppRouter/AppRouter";
import styled from 'styled-components';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <AppWrapper>
    <Spacer></Spacer>
      <AppRouter />
    </AppWrapper>
    </React.Fragment>
  );
}

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Spacer = styled.div`
  width: 140px;
  height: 100%;
`;

export default App;
