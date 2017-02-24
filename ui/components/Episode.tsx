import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  episode;
  detail?: boolean;
}

const Episode: React.SFC<Props> = ({ episode, detail }) => {
  if (detail) {
    return (
      <article>
        <h1>{episode.title}</h1>
        <p>{episode.description}</p>
        {episode.topics.map(topic =>
          <div key={topic.id}>{topic.name}</div>
        )}
      </article>
    );
  } else {
    return (
    <article>
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
