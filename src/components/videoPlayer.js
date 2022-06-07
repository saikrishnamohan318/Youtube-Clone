import React from "react";

class Videoplayer extends React.Component{
    render(){
        if(this.props.video){
            var videoid = this.props.video.id.videoId;
            var url = `https://www.youtube.com/embed/${videoid}`;
            console.log(videoid);
            return(
                <div id="leftbox">
                    <iframe width="900" height="450" src={url} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    <h4>{this.props.video.snippet.title}</h4>


                </div>
            )
        }
    }
}
export default Videoplayer;