/* eslint-disable react/prop-types */
export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>Title: {props.post.title}</h2>
      <p>Body: {props.post.body}</p>
      <p>image: {props.post.image}</p>
    </div>
  );
}
