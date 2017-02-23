import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  show;
}

const Show: React.SFC<Props> = ({ show }) => (
  <article className="show-item">
    <Link to={`/hello/${show.id}/${show.uid}`}>
      <img src={show.posterImageUrl} alt={show.title}/>
    </Link>
    <div className="show-item-details">
      <Link to={`/hello/${show.id}/${show.uid}`}>
        <h1>{show.title}</h1>
      </Link>
      <p>{show.description}</p>
    </div>
  </article>
);

export default Show;
