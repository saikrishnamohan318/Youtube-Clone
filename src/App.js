import React from 'react';
import './App.css';
import ytsearch from 'youtube-api-search';
import Searchbar from './components/searchBar';
import Videoitems from './components/videoItems';
import Videoplayer from './components/videoPlayer';
const key = "AIzaSyBeAheoB4w-vhPXH5LiKXmqT7OaPySKnos";


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      videos: [],
      selectedvideos:null
    }
  }
  getvideos = (term) => {
    ytsearch({key:key, term:term},(videos) => {
      console.log(videos);
      this.setState({videos:videos, selectedvideos:videos[0]});
    })
  }
  componentDidMount(){
    this.getvideos("python")
  }
  render(){
    return(
      <div className='div'>
          <Searchbar clickonSearch = {term => {
            this.getvideos(term);
          }}/>
          <br></br>
          <div id='boxes'>
            <Videoplayer video={this.state.selectedvideos}/>
            <Videoitems clickonVideo = {selectedvideofromlist => {
              this.setState({selectedvideos:selectedvideofromlist})
            }} videos={this.state.videos}/>
          </div>
      </div>
    )
  }
}

export default App;
