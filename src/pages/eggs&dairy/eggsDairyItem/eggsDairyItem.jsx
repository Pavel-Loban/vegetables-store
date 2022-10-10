import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';
import { Button } from '@mui/material'


const EggsDairyItem = () => {
    const navigate = useNavigate();

    const {id} = useParams()

    const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/eggs';

  const [error, setError] = useState(null);

  const [eggs, setEggs] = useState(null);

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setEggs(res.data[0].eggs)
        // console.log(res.data[0].eggs)
      })
      .catch((error) => {
        setError(error)
      })
  }, []);



  if (error) return `Error: ${error.message}`
    // console.log(navigate)

    const handleClick = () => {
        navigate('/eggs&dairy')
    }



    return !!eggs && (
       (<div>
            <Button variant='contained' onClick={handleClick} >To Eggs & Dairy</Button>
            , {id}
            {eggs.filter((item) => item.id === parseInt(id)).map((item) =>{ return (
                <div key={item.id}>
                <img src={item.imgSrc}/>
                <div>{item.price}</div>
                </div>

            ) })  }
        </div>
       )
    );
};

export default EggsDairyItem;