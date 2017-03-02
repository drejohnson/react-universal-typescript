import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { compose, lifecycle, pure, toClass, withHandlers } from 'recompose';
import * as videojs from 'video.js';

export default class VideoPlayer extends React.Component<any, any> {
  public player;
  public videoNode;

  public componentDidMount() {
    // instantiate video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  // destroy player on unmount
  public componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  public render() {
    return (
      <div data-vjs-player>
        <video ref={ node => this.videoNode = node } className="video-js"></video>
      </div>
    );
  }
}

/*interface Props {}

const VideoPlayer: React.SFC<Props> = () => {
  return (
    <div data-vjs-player>
      <video id="videoPlayer" ref={ node => this.videoNode = node } className="video-js" />
    </div>
  );
};

const componentLifecycle = lifecycle({
  async componentDidMount() {
    // instantiate video.js
    this.player = await videojs('#videoPlayer', this.props, function onPlayerReady() {
      console.log(this.player());
      console.log('onPlayerReady', this);
    });
  },
  // destroy player on unmount
  componentWillUnMount() {
    if (this.player()) {
      this.player().dispose();
    }
  }
});

export default compose(
  componentLifecycle,
  toClass
)(VideoPlayer);*/
