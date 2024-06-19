import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-api-j07x.onrender.com/api",
})

export const getArticles = () => {
    return newsApi
    .get("/articles")
    .then((res) => {
        return res.data
    })
}

export const getArticle = (article_id) => {
    return newsApi
    .get(`/articles/${article_id}`)
    .then((res) => {
        return res.data
    })
}

export const getTopics = () => {
    return newsApi
    .get("/topics")
    .then((res) => {
        return res.data
    })
}

export const getCommentsByArticleId = (article_id) => {
    return newsApi
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data
    })
}