import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Cards from '../../Components/_common/Cards/Cards';
import { useNavigate} from 'react-router';

const Beverage = () => {
  const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/items'
  const [beverage, setBeverage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const link = '/beverages';

  const toItem = (id) => {
    navigate(`${link}/${id}`)
  }

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setBeverage(res.data[0].beverage)
        // console.log(res.data[0].beverage)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (error) return `Error: ${error.message}`

  return (
    !!beverage && (
      <div>
        <Container sx={{ pb: 2 }}>
          <Typography variant="h2" component="h6" sx={{ textAlign: 'center' }}>
            Beverage
          </Typography>
        </Container>
        <Grid container spacing={2}>
          {beverage.map((item) => {
            return <Cards {...item} key={item.id} toItem={toItem} />

          })}
        </Grid>
      </div>
    )
  )
}

export default Beverage
