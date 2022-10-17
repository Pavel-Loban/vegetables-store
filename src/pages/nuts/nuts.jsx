import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import Cards from '../../Components/_common/Cards/Cards'
import { useNavigate} from 'react-router';
import SceletonCard from '../../Components/_common/Cards/sceletonCard';

import './nuts.scss'

import {connect} from 'react-redux'
import {nutsLoaded,addedBeveragesInCart} from '../../actions'

const Nuts = ({nuts,nutsLoaded, addedBeveragesInCart}) => {

  const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/nuts';

  const [error, setError] = useState(null);

  // const [nuts, setNuts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const toItem = (id) => {
    navigate(`/nuts/${id}`)
  }

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        nutsLoaded(res.data);
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
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
        {isLoading ? [...new Array(6)].map((item, i) => <SceletonCard key={i} /> )
        : nuts.map((item) => <Cards item={item} key={item.id} toItem={toItem} addedBeveragesInCart={addedBeveragesInCart} />
        )}
          {/* {nuts.map((item) => {
                    return (<Cards {...item} key={item.id}
                  toItem={toItem}
                  /> )
                })} */}
        </Grid>
      </div>
      </div>
    )
  )
}

const mapStateToProps = ({nut:{nuts}}) => {
  return {nuts }
}

const mapDispatchToProps =  {
  nutsLoaded,
  addedBeveragesInCart
  // removeBeveragesInCart
}

export default connect(mapStateToProps,mapDispatchToProps) (Nuts)
