import './styles.css';
import { useState, useEffect } from 'react';
import api from './api/api';
import SmugGifs from './components/SmugGifs';
import ProudGifs from './components/ProudGifs';

function App() {
  const [smugData, setSmugData] = useState([]);
  const [ProudData, setProudData] = useState([]);
  const [bothDataSets, setBothDataSets] = useState('');
  
  async function fetch(type, query = null, event) {
    if(event) {
      query = event.target.innerText.slice(5, -5);
      type = 'search';
      console.log(query, type)
    }
    let assets = await api([type, query]);
    setBothDataSets('');
    if(query == 'smug')
      setSmugData(prevSmugData => [...prevSmugData, ...assets.data]);
    else if(query == 'proud')
      setProudData(prevProudData => [...prevProudData, ...assets.data]);
    else {
      setSmugData(prevSmugData => [...prevSmugData, ...assets.data]);
      setProudData(prevProudData => [...prevProudData, ...assets.data]);
    }
  }

  function handleAppBtnClick() {
    setBothDataSets('random');
  }

  useEffect(() => {
    fetch(bothDataSets, '', '');
  }, [bothDataSets]);

  useEffect(() => {
    fetch('search', 'smug');
    fetch('search', 'proud');
  }, []);

  return (
    <div className="App">
      <h1>JIFS! JIFS EVERYWHERE!</h1>
      <div className="wrapper">
        <SmugGifs
          data = {smugData}
          handleClick = {e => fetch('search', 'smug', e)}
        />
        <ProudGifs
          data = {ProudData}
          handleClick = {e => fetch('search', 'proud', e)}
        />
      </div>
      <button id='app-btn' onClick={handleAppBtnClick}>Random!</button>
    </div>
  );
}

export default App;
