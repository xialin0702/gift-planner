import React, {useState, useEffect} from 'react';
import axios from 'axios';
import OccassionsGroup from './OccassionsGroup.jsx';
import Button from '@mui/material/Button';
import NewGift from './NewGift.jsx';


const HomeContent = ({gifts,occassions,recipients,getGifts,setGifts}) => {

  const [openModal, setIsOpen] = useState(false);


  return (
      <div className='homeContent'>
        <h1>My Gifts </h1>
          {occassions.map((o)=> {
            return (
              <div key={o}>
                <OccassionsGroup
                  occassion={o}
                  getGifts={getGifts}
                  setGifts={setGifts}
                  gifts={gifts.filter((g)=> {
                    return g.occassion === o;
                  })}/>
              </div>
              )
          })}
        <div id='new-gift-button'>
          <div id='gift-modal-close-button'>
            <Button
              variant="contained"
              component="label"
              onClick={(e)=>{setIsOpen(true)}}
              >New Gift
            </Button>
          </div>
          <NewGift
            openModal={openModal}
            setIsOpen={setIsOpen}
            getGifts={getGifts}
            setGifts={setGifts}
            />
        </div>
      </div>
  );
}

export default HomeContent;
