import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';
import { Button } from '@mui/material'



const BeverageItem = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const handleClick = () => {
        navigate('/beverages');
    }

    const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/fruits';

  const [error, setError] = useState(null);

  const [beverages, setBeverages] = useState(null);

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setBeverages(res.data);
        // console.log(res.data[0].vegetables)''
      })
      .catch((error) => {
        setError(error);
      })
  }, []);


  if (error) return `Error: ${error.message}`


    return !!beverages && (
       (<div>
            <Button variant='contained' onClick={handleClick} >To Beverage</Button>
            , {id}
            {beverages.filter((item) => item.id === parseInt(id)).map((item) =>{ return (
                <div key={item.id}>
                <img src={item.imgSrc}/>
                <div>{item.price}</div>
                </div>

            ) })  }
        </div>
       )
    );
};

export default BeverageItem;