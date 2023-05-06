import { useEffect } from "react";
import axios from "axios";

export default function PostsLayout() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      }).finally(function() {});
  }, []);
  return <div>
  <h1>PostsLayout</h1>
  </div>;
}
