import React, {useState} from "react"

const VideoDetails = (props) => {
    const { title } = props

    const [likes, setLikes] = useState(100)
    // likes: name of the variable | setLikes: method to setState
    const [count, setCount] = useState(0)

    const addLikes = () =>{
        setLikes(likes +1)
    }

    return (
        <fieldset>
            <legend> VideoDetails.jsx</legend>
            <h1> Video Details</h1>
            <h3> Title: {title}</h3>
            <h3> Views: {props.views}</h3>
            <h3> Likes: {likes } </h3>
            <button onClick={addLikes}> Add likes</button>
            
            <h3> Count: {count}</h3>
            <button onClick={()=>setCount(count+1)}>Add count</button>
            <h3> Hashtags: {props.hashtags}</h3>
            {
                props.hashtags.map((eachTag, i) => {
                    return (
                        <li key={i}> {i} : {eachTag}</li>
                    )
                })
            }
            
        </fieldset>
    )
}

export default VideoDetails