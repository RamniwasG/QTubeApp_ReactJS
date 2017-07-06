import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_details';
//import Comment from './components/comment';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDewYyVHXYPuFGBggCZWC0jwuCTifYDN1Q';

class App extends Component{
//constructor provides the initial values whats we want
  constructor(props){
    super(props);
    this.state= {
        videos: [],
        selectedVideo: null
     };
     this.videoSearch('reactjs');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
        });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},200);
      return (
        <div>
          <SearchBar selectedVideo={this.state.selectedVideo}
            onSearchTermChange={videoSearch}
          />

          <div className="row">

              <VideoDetail video={this.state.selectedVideo} />

            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos}
            />
          </div>

        </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
