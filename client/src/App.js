// import React, { useEffect, useState } from 'react';
// import DisplayMessage from './DisplayMessage.tsx';
// import Button from './components/Button.jsx';
// import ToggleComponent from './components/ToggleComponent.jsx';
// import DisplayData from './DisplayData.jsx';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment } from './store';


export const AppContext = createContext();

function App() {
  const queryClient = new QueryClient();
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()



  //   const [message, setMessage] = useState('Loading...');

  // fetch('https://humble-succotash-x59j5q77g4w6cpxvg-5000.app.github.dev/api/message')
  //   .then((res) => res.json())
  //   .then((data) => setMessage(data.message))
  //   .catch((err) => {
  //     console.error('Fetch error:', err);
  //     setMessage('Failed to fetch message');
  //   });





  return (
    <QueryClientProvider client={queryClient}>

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
        {/* <AppContext.Provider value={"context"}>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abou
            t" element={<About />} />
          </Routes> */}
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
        </nav>

        {/* </AppContext.Provider> */}
        <h1>Redux Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

      </div>
    </QueryClientProvider >

  );
}

export default App;
