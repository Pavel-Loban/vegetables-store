import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import Cards from '../../Components/_common/Cards/Cards'
import { useNavigate} from 'react-router';

import './nuts.scss'

const Nuts = () => {

  const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/items';

  const [error, setError] = useState(null);

  const [nuts, setNuts] = useState(null);

  const navigate = useNavigate();

  const link = '/nuts';

  const toItem = (id) => {
    navigate(`${link}/${id}`)
  }

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setNuts(res.data[0].nuts)
        // console.log(res.data[0].nuts)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (error) return `Error: ${error.message}`

  return !! nuts && (
    (
      <div className={'apple'}>
       <div
      // className="container"
      >
        <Container sx={{pb:2}}>
          <Typography variant="h2" component="h6" sx={{textAlign: 'center'}}>
            Nuts
          </Typography>
        </Container>
        <Grid container spacing={2}>
          {nuts.map((item) => {
                    return (<Cards {...item} key={item.id}
                  toItem={toItem}
                  /> )
                })}
        </Grid>
      </div>
      </div>
    )
  )
}

export default Nuts
