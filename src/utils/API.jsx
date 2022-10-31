import axios from 'axios'

const url = axios.create({ baseURL: 'https://felix-game-server.herokuapp.com/api/' })

export const getReviews = () => {
    return url.get('reviews').then((res) => {return res.data.reviews})
}
export const getCategories = () => {
    return url.get('categories').then((res) => {return res.data})
}
export const getReviewById = (review_id) => {
    return url.get(`reviews/${review_id}`).then((res) => {return res.data.review})
}