import React from 'react'
import styles from './Navbar.module.scss'
import AuxProps from '../../models/AuxProps'

const Navbar = (props: AuxProps) => {

    return (
        <div>
            <nav className={`${styles.navbar}`} role="navigation" aria-label="main navigation">
                {props.children}
            </nav>
        </div>
    );
};

export default Navbar;
