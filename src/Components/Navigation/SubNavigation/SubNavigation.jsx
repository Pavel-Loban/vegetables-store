import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import styles from './subNav.module.scss'
import searchSvg from '../../../assets/img/imageNavigation/search.svg'
import logo from '../../../assets/img/imageNavigation/logo.svg'
import phone2 from '../../../assets/img/imageNavigation/phone2.svg'
import like from '../../../assets/img/imageNavigation/favorite.svg'
import person from '../../../assets/img/imageNavigation/person.svg'

const SubNavigation = () => {

    const [age, setAge] = React.useState('');
    const [search, setSearch] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const changeSerchValue = (e) => {
    setSearch(e.target.value);
    // props.onSearch(e.target.value);
  }

  return (
    <div className={styles.subNav}>
      <div className={styles.logo}>
        <img src={logo} />
       <FormControl sx={{  minWidth: 114}} size="small" >
      <InputLabel id="demo-select-small">Gurugram</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Gurugram"
        onChange={handleChange}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        <MenuItem className={styles.color} value={1}>Ten</MenuItem>
        <MenuItem value={2}>Twenty</MenuItem>
        <MenuItem value={3}>Thirty</MenuItem>
      </Select>
    </FormControl>

   <div className={styles.search}>
   <img src={searchSvg} />
   <input className={styles.inputSearch} placeholder= 'Search for products...'/>
   </div>
      </div>
      <div className={styles.subRight}>
      <div className={styles.subNavigationRight} >
        <img src={phone2}/>
        <span>+375 29 000 00 00</span>
      </div>
      <div className={styles.favorite}><img src={like}/></div>
      <div className={styles.person}>
        <img src={person}/>
        <span>John Doe</span>
        </div>
      </div>

    </div>
  )
}

export default SubNavigation
