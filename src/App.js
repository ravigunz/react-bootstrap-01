import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {});
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {});
  }, []);

  return (
    <div className="App">
      <h1>Hello React Bootstrap</h1>
    </div>
  );
}

export default App;
