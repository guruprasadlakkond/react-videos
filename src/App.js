import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./services/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount() {
    this.onFormSubmit("buildings");
  }
  onFormSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
