import { useParams } from "react-router-dom"

export default function User(){
    const {id} = useParams()
    return (
        <>
        <div className="flex justify-center bg-slate-400 p-4">Hi welcome :{id}</div>
        </>
    )
}