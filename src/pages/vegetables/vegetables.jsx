import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material'
import axios from 'axios'
import { Container } from '@mui/system'
import Buttons from '../../Components/Buttons/Buttons'
import Cards from '../../Components/_common/Cards/Cards'


const Vegetables = () => {

    const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/vegetables';

  const [error, setError] = useState(null)

  const [vegetable, setVegetable] = useState(null)

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setVegetable(res.data[0].vegetables)
        console.log(res.data[0].vegetables)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (error) return `Error: ${error.message}`


    return !! vegetable && (
        (
             <div>
              <Container sx={{pb:2}}>
                <Typography variant="h2" component="h6" sx={{textAlign: 'center'}}>
                  Vegetables
                </Typography>
              </Container>
              <Grid container spacing={2}>
                {vegetable.map((item) => {
                    return (<Cards {...item} key={item.id}
                  // getItem={getItem}
                  /> )
                })}
              </Grid>
            </div>
          )
    );
};

export default Vegetables;