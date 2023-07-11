import { api } from "./api";

export const CreatePostAPI = async (text) => {
  try {
    const { data } = await api.post(
      "/post",
      { text },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Cannot post", error);
  }
};

export const GetPostsApi = async () => {
  try {
    const { data } = await api.get("/post");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Cannot see any post");
  }
};
