import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { CreatePostAPI, GetPostsApi } from "../../services/post.services";

import Postcard from "../../components/PostCard/Postcard"
import TextInput from "../../components/TextInput/TextInput";
import ToFollow from "../../components/ToFollow/ToFollow";
import Trending from "../../components/Trending/Trending";

function Home() {
  const [posts, setPost] = useState([]);
  const [likes, setLikes] = useState([])
  const [reload, setReload] = useState(false)

  const GetPosts = async () => {
    try{
      const res = await GetPostsApi();
      if(res) {
        setPost(res.post);
        setLikes(res.likes)
      }
    }catch(error){
      console.error(error)
    }
  };

  const handleReload = () => {
    setReload(true)
  }

  useEffect(() => {
    GetPosts();
    setReload(false)
  }, [reload]);

  const handleNewPost = async (text, img) => {
    try {
      await CreatePostAPI(text, img)
      GetPosts()
    }catch(error){
       console.error(error)
    }
  }

  return (
    <div className="">
      <Sidebar />
      <TextInput onNewPost={handleNewPost} />
      {posts.length > 0 &&
        posts
          .slice()
          .reverse()
          .map((post) => (
            <Postcard
              key={post.id}
              post={post}
              likes={likes}
              handleReload={handleReload}
            />
          ))}
      <ToFollow />
      <Trending />
    </div>
  );
}

export default Home;
