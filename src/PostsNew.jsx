export function PostsNew(props) {
  console.log("The props are", props);
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <p>Blog by: {props.name}</p>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Create blog</button>
      </form>
    </div>
  );
}
