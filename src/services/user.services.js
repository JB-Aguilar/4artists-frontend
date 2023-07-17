import { api } from "./api"

export const GetUsers = async () => {
    try {
        const { data } = await api.get('/users')
        return data
    }catch(error){
        console.error('Cannot get users', error)
    }
}

export const SaveLikes = async (userId, postId) => {
  try {
    const { data } = await api.post(`/users/${userId}/likes/${postId}`);
    return data;
  } catch (error) {
    console.error("Cannot save like", error);
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