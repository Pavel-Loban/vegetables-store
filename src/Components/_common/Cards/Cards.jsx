import React from 'react';
import { useNavigate} from 'react-router';
import { Card, CardContent, CardMedia, Grid,IconButton,ThemeProvider, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import Buttons from '../../Buttons/Buttons'
// import heart from '../../assets/img/card/heart.svg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { createTheme } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Cards = ({id,title,imgSrc,price,toItem}) => {


  // const link = 'eggs&dairy';
  const [hearts,setHearts] = React.useState(true);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: 'red',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const re = () => {
    setHearts((previousState ) => !previousState)
  }
    return (
        <>
                  <Grid item xs={12} sm={6} md={4} key={id}>
                    <Card sx={{ margin: '0 auto',  width: 300 }}>
                      <CardMedia
                        image={imgSrc}
                        component='img'
                        alt={title}
                        title={title}
                        sx={{ height: 200 }}
                        // onClick={() => getItem(link,id)}
                        // getItem={getItem}
                        onClick={() => toItem(id)}
                      />
                      <CardContent sx={{display: 'flex',
                    paddingLeft: '0'}}>
                      <Container>
                      <Typography
                        variant='h6'
                        component='h3'
                        >{title}</Typography>
                        <Typography
                        variant='body1'
                        >{price} $</Typography>
                      </Container>
                      <Container style={{paddingLeft: 0}}>
                      <ThemeProvider theme={theme}>
                        <IconButton onClick={re} style={{ height: 30,width: 30, float: 'right'}}>
                        {hearts ? <FavoriteBorderIcon/> : <FavoriteIcon
                        color='secondary'
                         /> }
                        </IconButton>
                        </ThemeProvider>
                      {/* <CardMedia
                        image={heart}
                        component='img'
                        alt='heart'
                        style={{ height: 30,width: 30, float: 'right',
                        paddingLeft: 0
                       }}
                      /> */}
                      </Container>
                      </CardContent>
                      <Container sx={{mb:2}}>
                        <Buttons price={price}/>
                      </Container>
                    </Card>
                  </Grid>
        </>
    );
};

export default Cards;