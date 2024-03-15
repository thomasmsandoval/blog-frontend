/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props.onShowPost);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="posts card">
            <h2>{post.title}</h2>
            <img src={post.image} alt="" />
            <p>Body:{post.body}</p>
            <button onClick={props.onShowPost}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
