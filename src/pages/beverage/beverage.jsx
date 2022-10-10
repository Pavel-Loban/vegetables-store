import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import beverage from '../../assets/img/slider/beverage.jpg'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from '@mui/material'
import { Container } from '@mui/system'
import Buttons from '../../Components/Buttons/Buttons'
import Cards from '../../Components/_common/Cards/Cards'

const Beverage = () => {
  const baseUrl = 'https://api.predic8.de/shop/products/15'
  const baseUrl2 = 'https://api.predic8.de'
  const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/items'
  const [fruit, setFruit] = useState(null)
  const [error, setError] = useState(null)

  const [arr, setArr] = useState(null)

  // const beverageArr = [
  //   {
  //     "imgSrc": beverage,
  //     "id": 1,
  //     "price": 10,
  //     "title": 'apple',
  //   },
  //   {
  //     imgSrc: beverage,
  //     id: 2,
  //     price: 15,
  //     title: 'pineapple',
  //   },
  //   {
  //     imgSrc: beverage,
  //     id: 3,
  //     price: 20,
  //     title: 'pumpkin',
  //   },
  //   {
  //     imgSrc: beverage,
  //     id: 4,
  //     price: 30,
  //     title: 'plum',
  //   },
  //   {
  //     imgSrc: beverage,
  //     id: 5,
  //     price: 35,
  //     title: 'pomegranate',
  //   },
  //   {
  //     imgSrc: beverage,
  //     id: 6,
  //     price: 56,
  //     title: 'orange',
  //   },
  //   {
  //     imgSrc: beverage,
  //     id: 7,
  //     price: 36,
  //     title: 'citric',
  //   },

  //   "nuts": [
  //     {
  //      "imgSrc": "https://cdn.britannica.com/04/194904-050-1B92812A/Raw-Food-Almond-food-Nut-Snack.jpg",
  //      "id": 0,
  //      "price": 10,
  //      "title": "almond"
  //     },
  //     {
  //      "imgSrc": "https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1647927494/BW%20BLOG/Untitled-design---2022-03-22T110718.980_11zon.jpg",
  //      "id": 1,
  //      "price": 20,
  //      "title": "hazelnut"
  //     },
  //     {
  //      "imgSrc": "https://content3.jdmagicbox.com/comp/asansol/s6/9999px341.x341.140209123300.h3s6/catalogue/jai-mata-di-soda-shop-asansol-bazar-asansol-gruzn.jpg",
  //      "id": 2,
  //      "price": 30,
  //      "title": "walnut"
  //     },
  //     {
  //      "imgSrc": "https://content3.jdmagicbox.com/comp/asansol/s6/9999px341.x341.140209123300.h3s6/catalogue/jai-mata-di-soda-shop-asansol-bazar-asansol-gruzn.jpg",
  //      "id": 3,
  //      "price": 40,
  //      "title": "plum"
  //     },
  //     {
  //      "imgSrc": "https://content3.jdmagicbox.com/comp/asansol/s6/9999px341.x341.140209123300.h3s6/catalogue/jai-mata-di-soda-shop-asansol-bazar-asansol-gruzn.jpg",
  //      "id": 4,
  //      "price": 50,
  //      "title": "sesame"
  //     },
  //     {
  //      "imgSrc": "https://content3.jdmagicbox.com/comp/asansol/s6/9999px341.x341.140209123300.h3s6/catalogue/jai-mata-di-soda-shop-asansol-bazar-asansol-gruzn.jpg",
  //      "id": 5,
  //      "price": 60,
  //      "title": "Brazilian nut"
  //     },
  //     {
  //      "imgSrc": "https://content3.jdmagicbox.com/comp/asansol/s6/9999px341.x341.140209123300.h3s6/catalogue/jai-mata-di-soda-shop-asansol-bazar-asansol-gruzn.jpg",
  //      "id": 6,
  //      "price": 70,
  //      "title": "cashew nuts"
  //     }
  //    ]
  // ]

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setFruit(res.data)
        // console.log(res.data)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setArr(res.data[0].beverage)
        // console.log(res.data[0].beverage)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (error) return `Error: ${error.message}`

  return (
    !!arr && (
      <div
      // className="container"
      >
        <Container sx={{pb:2}}>
          <Typography variant="h2" component="h6" sx={{textAlign: 'center'}}>
            Beverage
          </Typography>
        </Container>

        <Grid container spacing={2}>
          {arr.map((item) => {
                    return (<Cards {...item} key={item.id}
                  // getItem={getItem}
                  /> )
                })}
        </Grid>
        {/* <div className="box">
          <div>Name: {fruit.name}</div>
          <div>Price: {fruit.price}$</div>
          <div>
            <img src={`${baseUrl2}${fruit.photo_url}`} alt="" />
          </div>
        </div> */}
      </div>
    )
  )
}

export default Beverage
