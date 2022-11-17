import React from 'react';
import Banner from './Banner.jsx';
import Occassions from './Occassions.jsx';
import Recipients from './Recipients.jsx';


const HomePanel = ({recipients,occassions,gifts,setFilter}) => {
  return (
      <div className='homePanel'>
        <Banner/>
        <Occassions
          gifts={gifts}
          setFilter={setFilter}
          occassions={occassions}/>
        <Recipients
          gifts={gifts}
          setFilter={setFilter}
          recipients={recipients}/>
      </div>
  );
}

export default HomePanel;
