import "../src/App.css"
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import {
  addCounter,
  
} from './features/counterSlice';
import CounterItem from './components/CounterItem';


function App() {
  const [userEmail, setUserEmail] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUserEmail(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUserEmail('');
      localStorage.removeItem('email');
    });
  };

  useEffect(() => {
    setUserEmail(localStorage.getItem('email'));
  }, []);

  const dispatch = useDispatch();
  const counters = useSelector((state) => state.counter);
  const [counterName, setCounterName] = useState('');
  const [startValue, setStartValue] = useState('');

  const handleAddCounter = () => {
    dispatch(addCounter({ name: counterName, startValue }));
    setCounterName('');
    setStartValue('');
  };

  return (
    <div>
      <h1>Tally Counter App</h1>
      <div>
        <input
          type="text"
          placeholder="Counter Name"
          value={counterName}
          onChange={(e) => setCounterName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Start Value"
          value={startValue}
          onChange={(e) => setStartValue(Number(e.target.value))}
        />
        <button onClick={handleAddCounter}>Add Counter</button>
        {userEmail ? (
          <>
            <p>User Email: {userEmail}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={handleClick}>SignIn with Google</button>
        )}
      </div>
      <ul>
        {counters.map((counter) => (
          <CounterItem key={counter.id} counter={counter} />
        ))}
      </ul>
    </div>
  );
}

export default App;





