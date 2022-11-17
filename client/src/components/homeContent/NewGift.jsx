import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const NewGift = ({
  openModal,
  setIsOpen,
  getGifts,
  setGifts
}) =>  {

  const [nickName, setNickName] = useState('');
  const [occassion, setOccassion] = useState('');
  const [url, setUrl] = useState('');
  const occasions = [
    "Thanksgiving"
    ,"Christmas"
    ,"Anniversary"
    , "Baby"
  ,"Back to School"
  ,"Baptism & Christening"
  ,"Birthday"
  ,"Confirmation"
  ,"Congratulations"
  ,"Encouragement"
  ,"Friendship"
  ,"Get Well"
  ,"Graduation"
  ,"Retirement"
  ,"Sympathy"
  ,"Teacher Appreciation"
  ,"Thank You"
  ,"Wedding"]

  const handleAddGiftSubmit = () => {
    axios.post('/gift',{nickName,occassion,url})
    .then((result)=> {
      getGifts()
      setIsOpen(!openModal);
      setNickName('');
      setOccassion('');
      setUrl('');
    })
  }

  const frostyStyle = {
    overlay:{
      position: 'fixed',
      inset: '0px',
      backgroundColor: 'rgba(234,236,233,0.4)',
  },
    content:{
      backgroundColor:'rgba(234,236,233,0.1)',
      backdropFilter: 'blur(7px)',
      boxShadow: '0 6px 35px rgba(0,0,0,0.65)',
      borderRadius: '25px',
      borderColor: 'rgba(255, 255, 255,0.8)',
    }
  };


  return (
      <Modal
        isOpen={openModal}
        ariaHideApp={false}
        transparent={true}
        style={frostyStyle}
        id='gift-modal_container'
      >
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
          >
          <div id='gift-modal-close-button'>
            <div
              onClick={(e)=> {
                setIsOpen(!openModal)
                // setShowError(false);
              }}
                >
              <CloseIcon></CloseIcon>
            </div>
          </div>
            <h3 id='gift-modal-title'>Add A New Gift</h3>
          <TextField
            id="outlined-name"
            label="Name"
            value={nickName}
            onChange={(e)=> {setNickName(e.target.value)}}
            />
          <TextField
            id="outlined-name"
            label="Ocacassion"
            value={occassion}
            onChange={(e)=> {setOccassion(e.target.value)}}
            />
          <TextField
            id="outlined-name"
            label="Amazon URL"
            value={url}
            onChange={(e)=> {setUrl(e.target.value)}}
            />
          <div id='gift-modal-close-button'>
            <Button
              variant="contained"
              component="label"
              onClick={(e)=>{
                // setIsOpen(true)
                handleAddGiftSubmit();
              }}
              >Add
            </Button>
          </div>
        </Box>
      </Modal>
  )
}

export default NewGift;