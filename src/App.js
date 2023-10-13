import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import { useDispatch } from 'react-redux';
import { fetchData } from './Actions/FetchData';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div >
      <div >
        <Navigation />
      </div>
      <div style={{ flex: 1, marginTop: '20px', display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
