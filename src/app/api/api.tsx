import axios from "axios";
import { Post } from "../../../types";

const URL = 'http://localhost:8080';

export const getPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get<{ posts: Post[] }>(`${URL}/posts`);
        return response.data.posts;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const auth = async (data: any): Promise<any> => {
    try {
        const response = await axios.post(`${URL}/auth/login`, data);
        console.log(response.data);

        if (response.status === 200) {
            return { status: 'ok', token: response.data.token };
        } else {
            return { status: 'error' };
        }
    } catch (error) {
        console.error(error);
        return { status: 'error' };
    }
};
