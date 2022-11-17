import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HomePanel from './homePanel/HomePanel.jsx';
import HomeContent from './homeContent/HomeContent.jsx';

const App = () => {
  const [gifts, setGifts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [occassions, setOccassions] = useState([]);

  const getRecipients = () => {
    axios.get('/users')
    .then(({data})=> {
      setRecipients(data)
    })
  }
  const getGifts = () => {
    axios.get('/gifts')
    .then(({ data })=> {
      setGifts(data);
    })
  }

  const getOccassions = () => {
    axios.get('/occassions')
    .then(({data})=> {
      setOccassions(data)
    })
  }

  useEffect(()=> {
    getRecipients();
    getOccassions();
  },[gifts])

  useEffect(()=> {
    getGifts();
  },[]);

  useEffect(()=> {
    setFilter(gifts)
  },[gifts]);

  return (
    <div className='home'>
      <HomePanel
        gifts={gifts}
        recipients={recipients}
        occassions={occassions}
        setFilter={setFilter}
      />
      <HomeContent
        gifts={filter}
        occassions={occassions}
        recipients={recipients}
        getGifts={getGifts}
        setGifts={setGifts}
      />
    </div>
  );
}

export default App;
