import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCmHciIYevFUC4SNQpTO-cB_Shtl0miN-I';

// create a new component, should produce some html
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'overwatch'}, (videos) => {
			//es6 makes us able to change this.setState({ videos: videos}) to ({ videos }), since key and property are same name
			this.setState({ videos }); 
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} /> 
			</div>
		);
	}
}

// take the component's generated html and put it on the page(dom)
ReactDOM.render(<App />, document.querySelector('.container'));