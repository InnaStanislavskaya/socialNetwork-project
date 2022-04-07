import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0b242c6f-e752-4033-87fc-0150099d8044"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(respons => {
                return respons.data;
            })
    },
    followUsers(userId){
        return instance.post(`follow/${userId}`, {})
            .then(respons => {
                return respons.data;
            })
    },
    unfollowUsers(userId){
        return instance.delete(`follow/${userId}`)
            .then(respons => {
                return respons.data;
            })
    }
}