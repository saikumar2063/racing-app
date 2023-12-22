import React, { useState, useEffect } from "react";
import "./dashboard.css";
import styled from "styled-components";
import "./dashboard.css";

const Div = styled.div`
  display: flex;
  min-height: 100vh; /* minimum height = screen height */
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Span = styled.div`
  cursor: pointer;
  height: 50px;
  width: 100px;
  border: 1px solid green;
  border-radius: 35%;
  background-color: green;
  text-align: center;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
`;
function StartRace() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  return (
    <>
      <Div>
        <div className="track1">
          <div className="track2">
            <div className="track3">
              <Span onClick={startAndStop}>
                {minutes.toString().padStart(2, "0")} :
                {seconds.toString().padStart(2, "0")}
              </Span>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
}
export default StartRace;
