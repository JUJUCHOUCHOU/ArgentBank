import React from 'react';
import dataFeatures from './data'; 
import './style.scss'

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {dataFeatures.map((feature) => (
        <div className="feature-item" key={feature.id}>
          <img
            src={feature.img}
            alt={feature.title}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.content}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
