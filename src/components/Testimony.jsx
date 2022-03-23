import React from 'react';
import '../stylesheets/Testimony.css'

function Testimony(props) {

  return (
    <div className='testimony-container'>
      <img className='testimony-img' src={require(`../images/testimony-${props.testimonyJson.image}.jpg`)} alt={props.testimonyJson.alt} />
      <div className='testimony-text-container'>
        <p className='testimony-name'>
          <strong>{props.testimonyJson.name}</strong> in {props.testimonyJson.country}</p>
        <p className='testimony-position'>
          {props.testimonyJson.position} at <strong>{props.testimonyJson.company}</strong></p>
        <p className='testimony-text' dangerouslySetInnerHTML={{__html: props.testimonyJson.testimony}}></p>
      </div>
    </div>
  );
}

export default Testimony;
