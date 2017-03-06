import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  show;
  detail?: boolean;
}

const ShowCard: React.SFC<Props> = ({ show, detail }) => {
  if (detail) {
    return (
      <div className="show-view">
        <section className="show-marquee">
          <div className="show-image">
            <img src={show.posterImageUrl} alt={show.title}/>
          </div>
          <div className="show-info">
            <h1>{show.title}</h1>
            <p>{show.description}</p>
          </div>
        </section>
      </div>
    );
  } else {
    return (
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
  }
};

export default ShowCard;
