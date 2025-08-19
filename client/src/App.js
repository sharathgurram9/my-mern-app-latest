import React, { useEffect, useState } from 'react';
import DisplayMessage from './DisplayMessage.tsx';
import Button from './components/Button.jsx';
import ToggleComponent from './components/ToggleComponent.jsx';
import DisplayData from './DisplayData.jsx';

function App() {
//   const [message, setMessage] = useState('Loading...');

// fetch('https://humble-succotash-x59j5q77g4w6cpxvg-5000.app.github.dev/api/message')
//   .then((res) => res.json())
//   .then((data) => setMessage(data.message))
//   .catch((err) => {
//     console.error('Fetch error:', err);
//     setMessage('Failed to fetch message');
//   });





  return (
     <div className="space-x-2 p-4">
      {/* <Button label="Primary" onClick={() => alert("Primary clicked")} />
      <Button
        label="Secondary"
        variant="secondary"
        onClick={() => alert("Secondary clicked")}
      />
      <Button
        label="Delete"
        variant="danger"
        onClick={() => alert("Danger clicked")}
      />
      <Button label="Disabled" disabled /> */}
      <DisplayData/>
    </div>
  );
}

export default App;
