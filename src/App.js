import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RunnerDetails from "./components/runnerDetails";
import { Routes, Route } from "react-router-dom";
import StartRace from "./components/raceTrack";
import styled from "styled-components";

const Div = styled.div`
  background-color: lightgrey;
  height: 100vh;
`;
function App() {
  // return <div>Hello World!!!</div>;
  return (
    <Div>
      {/* <RunnerDetails /> */}

      <Routes>
        <Route path="/" exact element={<RunnerDetails />}></Route>
        <Route path="/startRace" exact element={<StartRace />}></Route>
      </Routes>
    </Div>
  );
}

export default App;
