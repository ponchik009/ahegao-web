import React from "react";
import "./App.css";

function App() {
  const [monday, setMonday] = React.useState(new Date());
  const [nowDate, setNowDate] = React.useState(new Date());

  React.useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + 1);
    setMonday(date);
  }, []);

  return (
    <div className="App">
      <div>Текущая дата: {nowDate.toISOString().split("T")[0]}</div>
      <div>Начало недели: {monday.toISOString().split("T")[0]}</div>
    </div>
  );
}

export default App;
