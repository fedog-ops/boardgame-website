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
export const updateVotes = (review_id, votesinc) => {
    return url.patch(`reviews/${review_id}` , {inc_votes:votesinc}).then((res) => {return res.data})
}
export const getComments = (review_id) => {
    return url.get(`reviews/${review_id}/comments`).then((res) => {return res.data.comments})
}
export const addComment = (review_id, username, body) => {
    return url.post(`reviews/${review_id}/comments` , {username, body})
    .then((res) => {console.log(res)})
}