import * as React from 'react';

interface Props {
  show;
}

const Episode: React.SFC<Props> = ({ show }) => (
  <div>
    <img src={show.posterImageUrl}/>
    <div>
      <h1>{show.title}</h1>
      <p>{show.description}</p>
    </div>  
  </div>
);

export default Episode;
