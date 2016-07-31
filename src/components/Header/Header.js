/**
 * Created by imdkva on 25.07.16.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Header.scss';

class Header extends Component {

  render() {
    return (
      <header className={styles.container}>
        <ul className={styles.nav}>
          <li className={styles.item}><Link to="welcome" className={styles.link}>Welcome!</Link></li>
          <li className={styles.item}><Link to="todo" className={styles.link}>Todo</Link></li>
        </ul>
      </header>
    );
  }

}

export default Header;