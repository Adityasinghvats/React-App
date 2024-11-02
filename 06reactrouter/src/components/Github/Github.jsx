import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github(){
    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/adityasinghvats')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // })

    return(
        <div className="text-center bg-slate-600 m-4 p-4 text-white text-3xl flex flex-col">
            <img src={data['avatar_url']} alt="Github img" width={300}/>
            {data['name']}
            Bio: {data['bio']}
            Github Followers: {data['followers']}
        </div>
    )
}

export const userDataInfo = async () => {
    const data = await fetch('https://api.github.com/users/adityasinghvats')
    return data.json()
}
