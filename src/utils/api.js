import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-j07x.onrender.com/api",
});

export const getArticles = (params) => {
  return newsApi.get("/articles", {params}).then((res) => {
      console.log(res.data)
    return res.data;
  }).catch((err) => {
    
  })
};

export const getArticle = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const patchArticleByArticleId = (article_id, patchBody) => {
  return newsApi.patch(`/articles/${article_id}`, patchBody).then((res) => {
    return res.data;
  });
  // .catch((error) => {
  //     console.error("Error updating article votes:", error);
  //     throw error;
  // });
};

export const getUsers = () => {
  return newsApi.get("/users").then((res) => {
    return res.data;
  });
};

export const postComment = (article_id, postBody) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then((res) => {
      return res.data;
    });
};

export const deleteComment = (comment_id) => {
    return newsApi
    .delete(`/comments/${comment_id}`)
    .then((res) => {
        console.log(res)
        console.log(`Deleted post with ID ${comment_id}`)
    })
}
