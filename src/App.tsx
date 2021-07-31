/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import "./App.css";

// The Button component uses React.memo() internally, to only rerender when the props change
import { Button } from "./components/Button";

function App() {
  // setState will cause the App component to rerender
  const [lastClickTimestamp, setLastClickTimestamp] = React.useState<number | null>();

  // Button will rerender every time the App rerenders
  const clickHandlerNotMemoized = () => {
    console.log("button clicked");
    setLastClickTimestamp(Date.now());
  };

  // Button will not rerender
  const clickHandlerMemoized = React.useCallback(() => {
    console.log("button clicked");
    setLastClickTimestamp(Date.now());
  }, []);

  return (
    <div className="App">
      <Button onClick={clickHandlerMemoized} />
      <p>
        Last Click: {lastClickTimestamp ? new Date(lastClickTimestamp).toLocaleTimeString() : "-"}
      </p>
    </div>
  );
}

export default App;
