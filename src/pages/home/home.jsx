import React from 'react';
import { Link } from 'react-router-dom'
import Carusel from '../../Components/Carusel/Carusel';

import './home.scss';

const Home = () => {
  return (
    <div className={'home'}>
      <Carusel />
    </div>
  )
}

export default Home
