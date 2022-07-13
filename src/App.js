import './styles.css';
import { useState, useEffect } from 'react';
import api from './services/api';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [jif, setJif] = useState({});
  
  async function fetch() {
    let info = await api();
    console.log(info);
    setJif(info.data.images.downsized_medium.url)
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      <Header jif = {jif} />
      <Main jif = {jif} handleClick = {fetch} />
    </div>
  );
}

export default App;
