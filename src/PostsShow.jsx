/* eslint-disable react/prop-types */
export function PostsShow(props) {
  const handleSubmit = (event) => event.preventDefault();
  const params = new FormData(event.target);
  props.onUpdatePost(props.post.id, params, () => event.target.reset());
  return (
    <div id="posts-show">
      <h1>Post information</h1>
      <p>Title: {props.post.title}</p>
      <p>Body: {props.post.body}</p>
      <p>image: {props.post.image}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.blog.title} name="title" type="text" />
          Body: <input defaultValue={props.blog.body} name="body" type="text" />
          Image: <input defaultValue={props.blog.image} name="image" type="text" />
        </div>
        <button type="submit">Update blog</button>
      </form>
    </div>
  );
}
