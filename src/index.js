import _ from 'lodash'
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video';
import VideoListItem from './components/video_list_item';




const API_KEY = "AIzaSyA45lm8JWjLWZ4GeuVi6kvDNsZyWHV6-0c";





		class App extends Component {
				constructor(props){
					super(props);
					this.state= {videos:[],
						SelectedVideo: null};

					this.videoSearch('Twenty One Pilots');
				}

				videoSearch(term){
					YTSearch({key: API_KEY , term:term}, (videos) =>{
						this.setState({videos: videos,
							SelectedVideo: videos[2]
					});
				});
				}
	



				  render() {
				  	const Searching = _.debounce((term) => {this.videoSearch(term)} , 50);
				    return (
				      <div>
				      <SearchBar onSearchTermChange={Searching}/>
				      <VideoDetail video={this.state.SelectedVideo}/>
				      <VideoList
				      onVideoSelect = {SelectedVideo => this.setState({SelectedVideo})} 
				      videos={this.state.videos}/>
				      </div>
				    );
				  }
		}

ReactDOM.render( <App /> , document.querySelector('.container'));
