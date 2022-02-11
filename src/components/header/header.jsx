import React from 'react';
import styles from './header.scss';

function Header(props) {
  const myProps = props;
  const { i18n } = myProps;
  return (
    <div className={styles['header-container']}>
      <h2>{i18n('home.header.title')}</h2>
      <div className="logo">
        <h2>DEV</h2>
      </div>
    </div>
  );
}

export default Header;
