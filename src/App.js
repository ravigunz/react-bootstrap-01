import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // fetch
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //     })
  //     .catch((e) => {});
  // }, []);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //     })
  //     .catch((e) => {});
  // }, []);

// fetch data usin axios
useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.log(error);
  }).finally(function () {});
}, []);

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.log(error);
  }).finally(function () {});
}, []);

  return (
    <div className="App">
      <h1>Hello React Bootstrap</h1>
    </div>
  );
}

export default App;
