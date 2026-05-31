import React, { useState } from 'react';
import './Gallery.css';

const artworks = [
  { id: 1, title: 'Sunset View', category: 'Painting', description: 'A beautiful sunset over the mountains.', img: '/images/painting1.jpg' },
  { id: 2, title: 'Mountain Peak', category: 'Painting', description: 'Snow-capped peaks reaching the clouds.', img: '/images/painting2.jpg' },
  { id: 3, title: 'City Lines', category: 'Architecture', description: 'Modern urban architecture at its finest.', img: null },
  { id: 4, title: 'Old Arches', category: 'Architecture', description: 'Ancient arches standing through time.', img: null },
  { id: 5, title: 'Stage Night', category: 'Theatre', description: 'A dramatic night performance on stage.', img: null },
  { id: 6, title: 'The Mask', category: 'Theatre', description: 'Classic theatre mask symbolizing drama.', img: null },
];

function Gallery() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? artworks
    : artworks.filter(a => a.category === filter);

  return (
    <div className="gallery-page">
      <h2>Our Gallery</h2>

      <div className="filter-btns">
        {['All', 'Painting', 'Architecture', 'Theatre'].map(cat => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map(art => (
          <div className="gallery-card" key={art.id}>
            {art.img
              ? <img src={art.img} alt={art.title} className="gallery-real-img" />
              : <div className="gallery-img-placeholder">{art.title[0]}</div>
            }
            <h3>{art.title}</h3>
            <span className="category-tag">{art.category}</span>
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;