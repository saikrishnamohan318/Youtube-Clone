import React from "react";

class Videoitems extends React.Component{
    renderVideos = () => {
        let x=this.props.videos.map(video => {
            return <li key={video.etag} onClick={() =>this.props.clickonVideo(video)}><img src={video.snippet.thumbnails.default.url} alt="img"></img><h6>{video.snippet.title}</h6></li>
        })
        return x;
    }
    render(){
        return(
            <div id="rightbox">
                {this.renderVideos()};
            </div>
        )
    }
}
export default Videoitems;