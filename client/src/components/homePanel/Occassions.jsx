import React,{useEffect,useState} from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

const Occassions = ({occassions,gifts,setFilter}) => {

  const [checked, setChecked] = useState([]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleChecked = () => {
    if(checked.length) {
      var filterGift = [];
      checked.forEach((c)=> {
        const filtered = gifts.filter((g)=> {return g.occassion===c});
        filterGift = filterGift.concat(filtered);
      })
      console.log('filterGift',filterGift);
      setFilter(filterGift);
    } else {
      setFilter(gifts);
    }
  }

  useEffect(()=> {
    handleChecked();
  },[checked])


  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <h3 >Occasions</h3>
          {occassions.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem
                key={value}
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${value}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
    </List>
  );
}

export default Occassions;
