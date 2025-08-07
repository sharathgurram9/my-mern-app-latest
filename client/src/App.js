import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

fetch('https://symmetrical-memory-69rj97qqxqwwcrv5p-5000.app.github.dev/api/message')
  .then((res) => res.json())
  .then((data) => setMessage(data.message))
  .catch((err) => {
    console.error('Fetch error:', err);
    setMessage('Failed to fetch message');
  });





  return (
    <div>
      <h1>Message from Backend:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
