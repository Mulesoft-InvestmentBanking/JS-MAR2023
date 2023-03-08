import React,  {Component} from "react"

class VideoDetails extends Component{
    render(){
        const {title} = this.props
        return (
            <fieldset>
                <legend> VideoDetails.jsx</legend>
                <h1> Video Details</h1>
                <h3> Title: {title}</h3>
                <h3> Views: {this.props.views}</h3>
                <h3> Hashtags: {this.props.hashtags}</h3>
                <ul>
                    {
                        this.props.hashtags.map((eachTag, i)=>{
                            return (
                                <li key={i}> {i} : {eachTag}</li>
                            )
                        })
                    }
                </ul>
            </fieldset>
        )
    }
}

export default VideoDetails
