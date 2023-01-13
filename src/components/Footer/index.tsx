import React from 'react';
import { Link } from 'react-router-dom';

import imgPica from '../../assets/pikachu.png';
import imgPoke from '../../assets/pokeball.png';
import imgLocation from '../../assets/pointer.png'

import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to='/pokemons' className={styles.footerLink}>
                <img className={styles.footerIcon} src={imgPica}  alt="pikachu" />
                Pokemons
            </Link>
            <Link to='/pokemons' className={styles.footerLink}>
                <img className={styles.footerIcon} src={imgPoke} alt="picabala" />
                Items
            </Link>
            <Link to='/pokemons' className={styles.footerLink}>
                <img className={styles.footerIcon} src={imgLocation} alt="location" />
                Map
            </Link>
        </footer>
    );
};

export default Footer;