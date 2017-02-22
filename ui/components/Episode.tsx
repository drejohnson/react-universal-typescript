import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  episode;
}

const Episode: React.SFC<Props> = ({ episode }) => (
  <article>
    <Link to={`/hello/${episode.id}`}>
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

export default Episode;
