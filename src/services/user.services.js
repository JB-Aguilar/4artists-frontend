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
    const { data } = await api.post(`/users/${userId}/likes/${postId}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    console.error("Cannot toggle like", error);
  }
};