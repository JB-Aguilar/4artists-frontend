import { api } from "./api";

export const CreatePostAPI = async (text, img) => {
  try {
    console.log(text, img)
    const formData = new FormData();
    formData.append("img", img);
    formData.append("text", text)

    const { data } = await api.post("/post", formData, {
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
    return data;
  } catch (error) {
    console.error("Cannot see any post");
  }
};
