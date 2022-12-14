import React, { useState, useEffect } from 'react'
import {Grid, Typography} from '@mui/material'
import axios from 'axios'
import { Container } from '@mui/system'
import Cards from '../../Components/_common/Cards/Cards'
import { useNavigate} from 'react-router';
import SceletonCard from '../../Components/_common/Cards/sceletonCard';

const Vegetables = () => {

    const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/nuts';

  const [error, setError] = useState(null)

  const [vegetables, setVegetables] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const link = '/vegetables';

  const toItem = (id) => {
    navigate(`${link}/${id}`)
  }

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setVegetables(res.data);
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
        // console.log(res.data[0].vegetables)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (error) return `Error: ${error.message}`


    return !! vegetables && (
        (
             <div>
              <Container sx={{pb:2}}>
                <Typography variant="h2" component="h6" sx={{textAlign: 'center'}}>
                  Vegetables
                </Typography>
              </Container>
              <Grid container spacing={2}>
              {isLoading ? [...new Array(6)].map((item, i) => <SceletonCard key={i} /> )
        : vegetables.map((item) => <Cards item={item} key={item.id} toItem={toItem} />
        )}
                {/* {vegetables.map((item) => {
                    return (<Cards {...item} key={item.id}
                  toItem={ toItem}
                  /> )
                })} */}
              </Grid>
            </div>
          )
    );
};

export default Vegetables;