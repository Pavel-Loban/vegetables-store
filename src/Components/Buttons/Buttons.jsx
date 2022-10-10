import React from 'react';
import {Typography, Button } from '@mui/material'


const Buttons = ({price}) => {

    const [count, setCount] = React.useState(0);


    const counterAdd = () => {
        setCount(count + 1);
      }

      const counterSubtract = () => {
        setCount(count > 0 ? count - 1 : 0);
      }

      const addProducts = () => {
        console.log(count)
        console.log(price)
      }

    return (
      <div style={{display: 'flex',
      justifyContent:'space-between'}}>
        <div style={{ display: 'flex',
                justifyContent:'space-between',
                width:100}}>
            <Button variant='contained'
                sx={{background: 'black',
                minWidth: 30,
                height: 25,
                ':hover':{background: '#7FAD39'},
                padding: 0,
                }}
                onClick={counterSubtract }>
                  -
                  </Button>
                <Typography>{count}</Typography>
                <Button
                variant='contained'
                sx={{background: 'black',
                minWidth: 30,
                height: 25,
                ':hover':{background: '#7FAD39'},
                padding: 0
                }}
                onClick={() => counterAdd()}
                >+</Button>
        </div>
        <Button variant='contained'
        sx={{background: '#7FAD39',
        ':hover':{background: 'black'},
        height: 25,
        padding: 0
        }}
        onClick={addProducts}
        >add</Button>
      </div>

    );
};

export default Buttons;