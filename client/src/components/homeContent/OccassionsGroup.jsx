import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GiftDetail from './GiftDetail.jsx';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const OccassionsGroup = ({gifts,getGifts,setGifts,occassion}) => {

  const total = () => {
    let sum = 0;
    gifts.forEach((g)=> {
      sum+=g.price
    })
    return sum.toFixed(2);
  }

  const boldText = {
    fontSize: 14, fontWeight: 'bold'
  }

  return (
    (gifts.length !== 0)
      &&
      <TableContainer component={Paper}>
      <h3>{occassion}</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={boldText}>Nickname</TableCell>
            <TableCell sx={boldText}>Photo</TableCell>
            <TableCell sx={boldText}>Item</TableCell>
            <TableCell sx={boldText}>Price</TableCell>
            <TableCell sx={boldText}>Gifted?</TableCell>
            <TableCell sx={boldText}>Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {gifts.map((row) => (
            <GiftDetail
            getGifts={getGifts}
            setGifts={setGifts}
            gift={row}
            key={row._id}/>
            ))}
          <TableRow>
            <TableCell sx={boldText}></TableCell>
            <TableCell sx={boldText}></TableCell>
            <TableCell align="right" sx={boldText}>Total</TableCell>
            <TableCell sx={boldText}>${total()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OccassionsGroup;
