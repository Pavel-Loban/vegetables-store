import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';
import { Button } from '@mui/material'


const VegetablesItem = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const handleClick = () => {
        navigate('/vegetables');
    }

    const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/vegetables';

  const [error, setError] = useState(null);

  const [vegetable, setVegetable] = useState(null);

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setVegetable(res.data[0].vegetables);
        // console.log(res.data[0].vegetables)''
      })
      .catch((error) => {
        setError(error);
      })
  }, []);


  if (error) return `Error: ${error.message}`


    return !!vegetable && (
       (<div>
            <Button variant='contained' onClick={handleClick} >To Vegetables</Button>
            , {id}
            {vegetable.filter((item) => item.id === parseInt(id)).map((item) =>{ return (
                <div key={item.id}>
                <img src={item.imgSrc}/>
                <div>{item.price}</div>
                </div>

            ) })  }
        </div>
       )
    );
};

export default VegetablesItem;