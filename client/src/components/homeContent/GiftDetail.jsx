import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const GiftDetail = ({gift,getGifts,setGifts}) => {

  const label = { inputProps: { 'aria-label': 'controlled' } };
  const [checked, setChecked] = useState(gift.gifted);

  const handleDelete = () => {
    axios.delete('/gift',{
      data:{_id: gift._id}
    })
    .then((result)=> {
      getGifts()
    })
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    axios.put('/gift',{
      data:{
        _id: gift._id,
        gifted: event.target.checked
      }
    })
    .then((result)=> {
      setChecked(!checked);
    })
  };


  return (
      <TableRow
        key={gift._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {gift.nickName}
        </TableCell>
        <TableCell >
          <img className='item-photo' src={gift.photo}/>
        </TableCell>
        <TableCell>
          <a href={gift.url} target="_blank">{gift.item}</a>
        </TableCell>
        <TableCell>${gift.price.toFixed(2)}</TableCell>
        <TableCell>
          <Checkbox {...label}
            icon={<CardGiftcardIcon/>}
            checkedIcon={<DoneIcon sx={{color:'green'}}/>}
            checked={checked}
            onChange={handleChange}
            />
        </TableCell>
        <TableCell>
          <CloseIcon
            sx={{ color: 'red' }}
            onClick={(e)=>{handleDelete()}}
           />
        </TableCell>
      </TableRow>
  );
}

export default GiftDetail;
