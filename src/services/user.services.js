import { api } from "./api"

export const GetUsers = async () => {
    try {
        const { data } = await api.get('/users')
        return data
    }catch(error){
        console.error('Cannot get users', error)
    }
}

export const toggleLike = async (userId, postId) => {
  try {
    const { data } = await api.post(`/posts/${postId}/toggle-like`, null, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    console.error("Cannot toggle like", error);
  }
};

export const RemoveLikes = async (userId, postId) => {
  try {
    const { data } = await api.delete(`/users/${userId}/likes/${postId}`);
    return data;
  } catch (error) {
    console.error("Cannot delete like", error);
  }
};