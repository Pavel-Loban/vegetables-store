import React from 'react';
import styles from './navBar.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import cart from '../../assets/img/imageNavigation/cart.svg';
import vector from '../../assets/img/imageNavigation/Vector.svg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const NavBar = () => {

    const [isVisible,setIsVisible] = React.useState(false);
    const [selected,setSelected] = React.useState(0);
    const [toLink,setToLink] = React.useState(0);

    const [select,setSelect] = React.useState(0);

    const menuListVisible = ['популярности','цене','алфавиту'];
    const navigation = ['HOME','PRODUCT','STORES','CONTACT'];
    const linkTo = ["/","/apple","/apricot","/beverage"];



    const onSelected = (id) => {
      setSelected(id);
      setIsVisible(!isVisible);
      console.log(id)
    }

    localStorage.setItem("key", toLink)

    const onSelect = (id) => {
        setSelect(id);
        setToLink(id)
      }


    return (
        <div className={styles.sort}>
            <div className={styles.selectNav}>
            <div className={styles.sort__label} onClick={onSelect}>
            <MenuIcon  />
          <b>Select Categories:</b>
          <span className={styles.active} onClick={() => setIsVisible(!isVisible) }>{menuListVisible[selected]}</span>
        </div>
       { isVisible && (
         <div className={styles.sort__popup}>
         <ul >
          {menuListVisible.map((item,i)=> <li  key={item}
          onClick={() => onSelected(i)}
          className={selected === i  ? 'active' : ''}
          >
            {item}
            </li>)}
         </ul>
       </div>
       )}
       <div className={styles.navList} >
            <ul>
                {navigation.map((item,i) => (
                  <Link to={linkTo[i]} key={i} >  <li key={i}  className={select === i ? styles.textColor  : ''}
                    onClick={() => onSelect(i)}
                    >{item}</li>
                    </Link>
                    )
                )}
            </ul>
        </div>

            </div>


        <Button variant="contained" className={styles.btnCart}>
             <img src={cart} />
            {/* <span>CART 2</span> */}
            Cart 2
            <img src={vector} />
        </Button>
      </div>
    );
};

export default NavBar;