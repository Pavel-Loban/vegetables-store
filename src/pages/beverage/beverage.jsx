import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Cards from '../../Components/_common/Cards/Cards';
import { useNavigate} from 'react-router';
import SceletonCard from '../../Components/_common/Cards/sceletonCard';
import Categories from '../../Components/Categories/Categories'

import {connect} from 'react-redux'
import {beveragesLoaded, addedBeveragesInCart, removeBeveragesInCart} from '../../actions'

const Beverage = ({beverages, beveragesLoaded, addedBeveragesInCart, removeBeveragesInCart}) => {
  const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/fruits'
  // const [beverage, setBeverage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const toItem = (id) => {
    navigate(`/beverages/${id}`)
  }

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        // setBeverage(res.data)
        beveragesLoaded(res.data)
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
        // console.log(res.data[0].beverage)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (error) return `Error: ${error.message}`

  return (
    !!beverages && (
      <div>
        <Container sx={{ pb: 2 }}>
          <Categories/>
          <Typography variant="h2" component="h6" sx={{ textAlign: 'center' }}>
            Beverage
          </Typography>
        </Container>
        <Grid container spacing={2}>
          {isLoading ? [...new Array(6)].map((item, i) => <SceletonCard key={i} /> )
        : beverages.map((item) => <Cards item={item} key={item.id} toItem={toItem} addedBeveragesInCart={addedBeveragesInCart} removeBeveragesInCart={removeBeveragesInCart} />
        )}
          {/* {beverage.map((item) => {
            return <Cards {...item} key={item.id} toItem={toItem} />

          })} */}
        </Grid>
      </div>
    )
  )
};

const mapStateToProps = ({beverage:{beverages}}) => {
  return {beverages }
}

const mapDispatchToProps =  {
  beveragesLoaded,
  addedBeveragesInCart,
  removeBeveragesInCart
}

export default connect(mapStateToProps,mapDispatchToProps) (Beverage)
