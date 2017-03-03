import * as React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

interface Props {
  episode;
  detail?: boolean;
}

const Episode: React.SFC<Props> = ({ episode, detail }) => {
  if (detail) {
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      aspectRatio: '16:9',
      sources: [{
        src: `${episode.videoUrl}`,
        type: 'video/mp4'
      }]
    };
    return (
      <article className="episode-view">
        <section className="episode-player">
          <VideoPlayer {...videoJsOptions} />
        </section>
        <section className="episode-info">
          <header>
            <h3>{episode.show.title}</h3>
            <h1>{episode.title}</h1>
          </header>
          <div className="episode-details">
            <div className="episode-description">
              <p>{episode.description}</p>
            </div>
            <div className="episode-topics">
              {episode.topics.map(topic =>
                <div key={topic.id}>{topic.name}</div>
              )}
            </div>
          </div>
        </section>
      </article>
    );
  } else {
    return (
    <article className="episode-item">
      <Link to={`/episode/${episode.id}/${episode.uid}`}>
        <h3>{episode.show.title}</h3>
        <h1>{episode.title}</h1>
        <p>{episode.description}</p>
        <img src={episode.imageThumbUrl} alt={episode.title}/>
        {episode.topics.map(topic =>
          <div key={topic.id}>{topic.name}</div>
        )}
      </Link>
    </article>
  );
  }
};

export default Episode;
