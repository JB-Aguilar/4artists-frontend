import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { GetPostsApi } from "../../services/post.services";

import Postcard from "../../components/PostCard/Postcard"

function Home() {
  const [post, setPost] = useState([]);

  const GetPosts = async () => {
    const res = await GetPostsApi();
    setPost(res);
  };

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <div className="">
      <Sidebar />
      {post.length > 0 &&
        post.slice().reverse().map((post) => <Postcard key={post.id} post={post} />)}
    </div>
  );
}

export default Home;
