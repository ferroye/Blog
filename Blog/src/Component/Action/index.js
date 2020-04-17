import localhost from '../../Api/localhost'
import { GET_BLOGS } from './ActionType'

export const getBlogsByUserId = (user_id) => async dispatcher => {
    const response = await localhost.get(`/post/user/${user_id}`)
    dispatcher({ type: GET_BLOGS, payload: response.data })
}

export const editBlogbyBolgId = () => {

}