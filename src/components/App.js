import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

export default class App extends Component {
  state = { videos: [], SelectVideo: null };
  onSearch = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        q: search
      }
    })
    this.setState({ videos: response.data.items })
  }
  onSelectVideo = (video) => {
    this.setState({ SelectVideo: video })
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar inputuser={this.onSearch} />
        <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetails video={this.state.SelectVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              onSelectVideo={this.onSelectVideo}
              videos={this.state.videos} />
              </div>
          </div>
        </div>
      </div>
    )
  }
}
