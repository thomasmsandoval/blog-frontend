/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="posts card">
            <img src={post.image} alt="" />
            <div className="card-body">
              <h2>{post.title}</h2>
              <p>Body:{post.body}</p>
              <button onClick={() => props.onShowPost(post)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
