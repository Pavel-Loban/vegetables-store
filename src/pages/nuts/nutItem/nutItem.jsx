import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';
import { Button } from '@mui/material'

const NutItem = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const handleClick = () => {
        navigate('/nuts');
    }

    const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/items';

  const [error, setError] = useState(null);

  const [nuts, setNuts] = useState(null);

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setNuts(res.data[0].nuts);
        // console.log(res.data[0].vegetables)''
      })
      .catch((error) => {
        setError(error);
      })
  }, []);


  if (error) return `Error: ${error.message}`


    return !!nuts && (
       (<div>
            <Button variant='contained' onClick={handleClick} >To Nuts</Button>
            , {id}
            {nuts.filter((item) => item.id === parseInt(id)).map((item) =>{ return (
                <div key={item.id}>
                <img src={item.imgSrc}/>
                <div>{item.price}</div>
                </div>

            ) })  }
        </div>
       )
    );
};

export default NutItem;