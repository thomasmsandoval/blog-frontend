/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input className="form-control" name="title" type="text" />
        </div>
        <div>
          Body: <input className="form-control" name="body" type="text" />
        </div>
        <div>
          Image: <input className="form-control" name="image" type="text" />
        </div>
        <button className="btn btn-outline-danger" type="submit">
          Create blog
        </button>
      </form>
    </div>
  );
}
