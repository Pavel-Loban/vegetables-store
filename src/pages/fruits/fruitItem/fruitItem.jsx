import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';
import { Button } from '@mui/material'



const FruitItem = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const handleClick = () => {
        navigate('/fruits');
    }

    const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/fruits';

  const [error, setError] = useState(null);

  const [fruits, setFruits] = useState(null);

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setFruits(res.data);
        // console.log(res.data[0].vegetables)''
      })
      .catch((error) => {
        setError(error);
      })
  }, []);


  if (error) return `Error: ${error.message}`


    return !!fruits && (
       (<div>
            <Button variant='contained' onClick={handleClick} >To Fruits</Button>
            , {id}
            {fruits.filter((item) => item.id === parseInt(id)).map((item) =>{ return (
                <div key={item.id}>
                <img src={item.imgSrc}/>
                <div>{item.price}</div>
                </div>

            ) })  }
        </div>
       )
    );
};

export default FruitItem;