import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [adult, setAdult] = useState('');
  const [child, setChild] = useState('');
  const [senior, setSenior] = useState('');
  const [result, setResult] = useState(null);

  function calculateTotal() {
    if (adult === '' || child === '' || senior === '') {
      alert('Please fill all ticket quantities');
      return;
    }

    let total = (adult * 25) + (child * 15) + (senior * 20);
    let discount = false;
    let finalTotal = total;

    if (total >= 200) {
      discount = true;
      finalTotal = total - (total * 0.20);
    }

    setResult({ total, finalTotal, discount });
  }

  return (
    <div className="services-page">

      <h2>Our Services</h2>

      <div className="services-list">
        <div className="service-item">
          <h3>🖼️ Art Exhibition</h3>
          <p>We host regular exhibitions showcasing local and international artists across all art categories.</p>
        </div>
        <div className="service-item">
          <h3>🎓 Art Workshops</h3>
          <p>Join our hands-on workshops led by professional artists. Suitable for all skill levels.</p>
        </div>
        <div className="service-item">
          <h3>🛒 Art Sales</h3>
          <p>Browse and purchase original artworks directly from the artists through our gallery.</p>
        </div>
      </div>

      <div className="ticket-calculator">
        <h3>Event Ticket Calculator</h3>
        <p className="prices">Adult: $25 &nbsp;|&nbsp; Child: $15 &nbsp;|&nbsp; Senior: $20</p>

        <div className="ticket-inputs">
          <label>Adult Tickets:</label>
          <input type="number" value={adult} onChange={e => setAdult(e.target.value)} min="0" />

          <label>Child Tickets:</label>
          <input type="number" value={child} onChange={e => setChild(e.target.value)} min="0" />

          <label>Senior Tickets:</label>
          <input type="number" value={senior} onChange={e => setSenior(e.target.value)} min="0" />
        </div>

        <button onClick={calculateTotal}>Calculate Total</button>

        {result && (
          <div className={result.discount ? 'ticket-result green' : 'ticket-result blue'}>
            {result.discount ? (
              <p>🎉 You got a 20% discount! Original: ${result.total} → Final: ${result.finalTotal}</p>
            ) : (
              <p>Total: ${result.total} — Spend more to get a 20% discount!</p>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

export default Services;