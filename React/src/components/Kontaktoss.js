import React, { useState } from 'react';

function Kontaktoss() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Skjemaet er sendt!');
  };

  return (
    <div>
      <h1>Kontakt Oss</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Navn:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-post:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Kontaktoss;
