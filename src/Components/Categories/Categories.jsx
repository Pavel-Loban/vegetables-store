import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './categories.module.scss'

const Categories = () => {

    const [isVisible,setIsVisible] = React.useState(false);
    const [selected,setSelected] = React.useState(0);
    const menuListVisible = ['popularity','price','alphabet'];
    const [select,setSelect] = React.useState(0);

    // const linkTo = ["/","/product","/stores","/contact"];

    const onSelected = (id) => {
        setSelected(id);
        setIsVisible(!isVisible);
        console.log(id);
      }

    //   const onSelect = (id) => {
    //     setSelect(id);
    //     setToLink(id)
    //   }

    return (
        <div className={styles.selectNav}>
            <div className={styles.sort__label}
            //  onClick={onSelect}
             >
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
            </div>
    );
};

export default Categories;