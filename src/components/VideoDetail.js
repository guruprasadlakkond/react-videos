import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }
  //   <video src="https://www.youtube.com/watch?v=lmU8DKUg3bM"></video>;
  return (
    <div>
      <div className="ui embed">
        {/*  <iframe
          title="Video player"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <iframe
          title="Video player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>

      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
