import { api } from "./api";

export const GetLikes = async () => {
  try {
    const { data } = await api.get("/likes");
    return data;
  } catch (error) {
    console.error("Cannot get likes", error);
  }
};

export const CreateLikes = async (userId, postId) => {
  try {
    const { data } = await api.post("/likes",{userId, postId}, {
      headers: {
        token: localStorage.getItem("token"),
      }, 
    });
    return data;
  } catch (error) {
    console.error("Cannot post", error);
  }
};

export const DeleteLike = async (likeId) => {
    try{
        const { data } = await api.delete('/likes', {likeId}, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    }   catch(error){
        console.error('Cannot delete like')
    }
}
