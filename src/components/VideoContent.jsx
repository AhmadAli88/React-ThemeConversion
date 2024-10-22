import React from "react";

const VideoContent = () => {
  return (
    <div class="video-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="video-frame">
              <img src="/src/assets/images/video-frame.jpg" alt="" />
              <a href="https://youtube.com" target="_blank">
                <i class="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
