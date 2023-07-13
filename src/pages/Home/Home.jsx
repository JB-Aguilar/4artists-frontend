import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { CreatePostAPI, GetPostsApi } from "../../services/post.services";

import Postcard from "../../components/PostCard/Postcard"
import TextInput from "../../components/TextInput/TextInput";
import ToFollow from "../../components/ToFollow/ToFollow";

function Home() {
  const [posts, setPost] = useState([]);

  const GetPosts = async () => {
    try{
      const res = await GetPostsApi();
      setPost(res);
    }catch(error){
      console.error(error)
    }
  };

  useEffect(() => {
    GetPosts();
  }, []);

  const handleNewPost = async (text) => {
    try {
      await CreatePostAPI(text)
      GetPosts()
    }catch(error){
       console.error(error)
    }
  }

  console.log(posts)

  return (
    <div className="">
      <Sidebar />
      <TextInput onNewPost={handleNewPost} />
      {posts.length > 0 &&
        posts.slice().reverse().map((post) => <Postcard key={post.id} post={post} />)}
      <ToFollow />
    </div>
  );
}

export default Home;
