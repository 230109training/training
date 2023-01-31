import React, { useState } from 'react'
import axios from 'axios';
import { stringify } from 'querystring';

const BASE_URL = "https://jsonplaceholder.typicode.com"

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const AxiosExample = () => {

    const [getPost, setgetPost] = useState<any>({})
    const [postPost, setPostPost] = useState<any>({})
    
    // promises
    const axiosGet = () => {
        axios.get(`${BASE_URL}/posts/1`)
            .then((response) => {
                setgetPost(response.data);
                console.log(getPost)
            })
    }

    // async await
    const asyncAxiosGet = async () => {
        const response = await axios.get(`${BASE_URL}/posts/1`);
        setgetPost(response.data);
    }

    // async await with client
    const clientAsyncAxiosGet = async () => {
        const response = await client.get("/posts/1");
        setgetPost(response.data);
    }

    // axios post example
    const axiosPost = () => {
        axios
            .post(`${BASE_URL}/posts`, {
                title: 'Hello World',
                body: "this is a new post!",
                userId: 1
            })
            .then((response) => {
                console.log(response.data);
                setPostPost(response.data);
            })
    }

  return (
    <div>
        <div>
            {
                getPost.id && <h2>{getPost.title}</h2>
            }
            <button onClick={clientAsyncAxiosGet}>Get Request</button>
        </div>
        <div>
            {
                postPost.id && <h2>{postPost.title}</h2>
            }
            <button onClick={axiosPost}>Post Request</button>
        </div>
    </div>
  )
}

export default AxiosExample