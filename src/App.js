import React, {useState, useRef} from "react";
import "./App.css";
import NavBar from "./Shared_Styles/Navigation/NavBar";
import AppRouter from "./Components/AppRouter/AppRouter";
import styled from 'styled-components';

function App() {
  const [currentRef, setCurrentRef] = useState("home")
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(currentRef)
  return (
    <React.Fragment>
      <NavBar />
      <AppWrapper>
         <AppRouter />
      </AppWrapper>
    </React.Fragment>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default App;
