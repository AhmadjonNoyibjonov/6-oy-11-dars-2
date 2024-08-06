import React from "react";
import USDUZSChart from "./components/index";

function App() {
  return (
    <div
      className="App"
      style={{
        margin: "50px",
        backgroundColor: "antiquewhite",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <h1 style={{ color: "brown", fontFamily: "inter",  }}>
        USD/UZS 5 Year Chart
      </h1>
      <USDUZSChart />
    </div>
  );
}

export default App;
