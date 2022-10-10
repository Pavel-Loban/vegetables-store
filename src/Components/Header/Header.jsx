import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss'
const Header = () => {
    return (
      <div className={styles.logo}>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/apple">Apple</Link>
        </li>
        <li>
          <Link to="/apricot">Apricot</Link>
        </li>
        <li>
          <Link to="/lime">Lime</Link>
        </li>
        <li>
          <Link to="/lychee">Lychee</Link>
        </li>
      </ul>
      </div>

    );
};

export default Header;