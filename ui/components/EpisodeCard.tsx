import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Helmet from 'react-helmet';
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
        <Helmet
          title={`${episode.show.title}: ${episode.title}`}
          meta={[
            //Facebook OG Tags
            { name: 'description', content: `${episode.description}` },
            { property: 'og:title', content: `${episode.show.title}: ${episode.title}` },
            { property: 'og:description', content: `${episode.description}` },
            { property: 'og:url', content: `https://phreshr.com/watch/${episode.id}/${episode.uid}` },
            { property: 'og:type', content: 'article' },
            { property: 'og:image', content: `${episode.imageThumbUrl}` },
            //Twitter Tags
            { property: 'twitter:title', content: `${episode.show.title}: ${episode.title}` },
            { property: 'twitter:description', content: `${episode.description}` },
            { property: 'twitter:url', content: `https://phreshr.com/watch/${episode.id}/${episode.uid}` },
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:image', content: `${episode.imageThumbUrl}` }
          ]}/>
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
      <Link to={`/watch/${episode.id}/${episode.uid}`}>
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
