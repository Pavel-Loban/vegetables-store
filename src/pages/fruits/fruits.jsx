import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material'
import axios from 'axios'
import { Container } from '@mui/system'
import Buttons from '../../Components/Buttons/Buttons'
import heart from '../../assets/img/card/heart.svg'
import Cards from '../../Components/_common/Cards/Cards';
import { useNavigate} from 'react-router';
import SceletonCard from '../../Components/_common/Cards/sceletonCard';

const Fruits = () => {


  const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/fruits';

  const [error, setError] = useState(null);

  const [fruits, setFruits] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const link = '/fruits';

  const toItem = (id) => {
    navigate(`${link}/${id}`)
  }

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setFruits(res.data[0].fruits);
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
        // console.log(res.data[0].fruits);
      })
      .catch((error) => {
        setError(error);
      })
  }, []);



  if (error) return `Error: ${error.message}`;


    return !! fruits && (
        (
             <div>
              <Container sx={{pb:2}}>
                <Typography variant="h2" component="h6" sx={{textAlign: 'center'}}>
                  Fruits
                </Typography>
              </Container>
              <Grid container spacing={2}>
              {isLoading ? [...new Array(6)].map((item, i) => <SceletonCard key={i} /> )
        : fruits.map((item) => <Cards {...item} key={item.id} toItem={toItem} />
        )}
                {/* {fruits.map((item) => {
                    return (<Cards {...item} key={item.id}
                      toItem={toItem}
                  /> )
                })} */}
               </Grid>
            </div>
          )
    );
}

export default Fruits
